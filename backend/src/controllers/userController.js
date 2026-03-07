const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const { sendOtp, verifyOtp } = require("../services/twilioService");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  try {
    const { phone, userName, email, password } = req.body;

    const isUserExist = await userModel.findOne({
      $or: [{ phone: phone }, { email: email }, { userName: userName }],
    });
    if (isUserExist) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    const otp = await sendOtp(phone);

    req.session.phone = phone;

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      phone,
      userName,
      email,
      password: hash,
      otp,
    });
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" },
    );
    res.cookie("token", token);
    res.status(201).json({
      message: "otp sent successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function verifyOtpController(req, res) {
  try {
    const { otp } = req.body;
    const phone = req.session.phone;

    const user = await userModel.findOne({
      otpVerified: false,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const result = await verifyOtp(phone, otp);
    if (result.status !== "approved") {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }
    user.otpVerified = true;
    await user.save();

    res.json({
      message: "OTP verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function resendOtpController(req, res) {
  try {
    const phone = req.session.phone;
    if (!phone) {
      return res.status(400).json({
        message: "Phone number not found in session",
      });
    }
    await sendOtp(phone);
    res.json({
      success: true,
      message: "OTP resent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  registerController,
  verifyOtpController,
  resendOtpController,
};

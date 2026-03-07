const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function makeAdminController(req, res) {
  try {
    const userId = req.params.userId;
const isAlreadyAdmin = await userModel.findOne({_id: userId, role: "admin"});

    if (isAlreadyAdmin) {
      return res.status(400).json({
        message: "User is already an admin",
      });
    }

    const user = await userModel.findByIdAndUpdate(
      userId,
      { role: "admin" },
      { returnDocument: "after" }
    );
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    res.json({ message: "User role updated to admin", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  makeAdminController,
};

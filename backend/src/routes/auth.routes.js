const express = require("express");
const authController = require("../controllers/authController");
const { authUser } = require("../middleware/auth.middleware");


const authRoutes = express.Router();

authRoutes.post("/registration", authController.registerController);

// authRoutes.post("/verifyOtp", authController.verifyOtpController);

// authRoutes.post("/resendOtp", authController.resendOtpController);
authRoutes.post("/login", authController.loginController);

authRoutes.get("/profile",  authController.getProfileController);
authRoutes.put("/profile", authUser, authController.updateProfileController);
authRoutes.post("/logout", authUser, authController.logoutController);


module.exports = authRoutes;

const express = require("express");
const userController = require("../controllers/userController");
const { authUser } = require("../middleware/auth.middleware");

const userRoutes = express.Router();

userRoutes.post("/registration", userController.registerController);

userRoutes.post("/verifyOtp", userController.verifyOtpController);

userRoutes.post("/resendOtp", userController.resendOtpController);
userRoutes.post("/login", userController.loginController);

userRoutes.get("/profile", authUser, userController.getProfileController);
userRoutes.post("/logout", userController.logoutController);

module.exports = userRoutes;

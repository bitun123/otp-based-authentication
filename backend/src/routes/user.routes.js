const express = require("express");
const userController = require("../controllers/userController");
const { authUser } = require("../middleware/auth.middleware");

const { notFound, errorHandler } = require("../middleware/errorMiddleware");

const userRoutes = express.Router();

userRoutes.post("/registration", userController.registerController);

// userRoutes.post("/verifyOtp", userController.verifyOtpController);

// userRoutes.post("/resendOtp", userController.resendOtpController);
userRoutes.post("/login", userController.loginController);

userRoutes.get("/profile", authUser, userController.getProfileController);
userRoutes.put("/profile", authUser, userController.updateProfileController);
userRoutes.post("/logout", authUser, userController.logoutController);


module.exports = userRoutes;

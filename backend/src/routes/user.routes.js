const express = require("express");
const userController =  require("../controllers/userController")

const userRoutes = express.Router();

userRoutes.post("/registration",userController.registerController)

userRoutes.post("/verifyOtp",userController.verifyOtpController)

userRoutes.post("/resendOtp",userController.resendOtpController)


module.exports = userRoutes;
const express = require("express");
const userController =  require("../controllers/userController")

const userRoutes = express.Router();

userRoutes.post("/registration",userController.registerController)

userRoutes.post("/verifyOtp",userController.verifyOtpController)


module.exports = userRoutes;
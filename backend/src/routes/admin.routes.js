const express = require("express");
const {authUser}  = require("../middleware/auth.middleware")
const adminController = require("../controllers/adminController")

const adminRoutes = express.Router();

adminRoutes.patch("/make-admin/:userId", authUser, adminController.makeAdminController);


module.exports = adminRoutes;
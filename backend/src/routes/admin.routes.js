const express = require("express");
const {authUser}  = require("../middleware/auth.middleware")
const adminController = require("../controllers/adminController")
const {isAdmin}  = require("../middleware/isAdmin.middleware")
const upload = require("../middleware/upload.middleware")
const adminRoutes = express.Router();
//this route is for converting a user to an admin
adminRoutes.patch("/user/make-admin/:userId", authUser, adminController.makeAdminController);


//adimn can see all users
adminRoutes.get("/user/all-users", authUser, isAdmin, adminController.getAllUsersController);


//admin can ban a user

adminRoutes.patch("/user/ban-user/:userId",authUser,isAdmin, adminController.banUserController);

//admin can unban a user
adminRoutes.patch("/user/unban-user/:userId",authUser,isAdmin, adminController.unbanUserController);

//admin can delete a user
adminRoutes.delete("/user/delete-user/:userId",authUser,isAdmin, adminController.deleteUserController);




//**control movie */  

adminRoutes.get("/movies/all-movies", authUser, isAdmin, adminController.getAllMoviesController);


adminRoutes.post("/movies/add-movie", upload.single("posterUrl"), authUser, isAdmin, adminController.addMovieController);










module.exports = adminRoutes;
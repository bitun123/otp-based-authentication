const express = require("express");
const userController = require("../controllers/userController");
const { authUser } = require("../middleware/auth.middleware");


const userRoutes = express.Router();

userRoutes.get("/getUserProfile", authUser, userController.getUserProfileController);

userRoutes.patch("/updateUserProfile", authUser, userController.updateUserProfileController);



userRoutes.get("/favorite-movies", authUser, userController.getFavoriteMoviesController);

userRoutes.post("/favorite-movies/:movieId", authUser, userController.addFavoriteMovieController);


userRoutes.delete("/favorite-movies/:movieId", authUser, userController.removeFavoriteMovieController);


// userRoutes.post("/history", authUser, userController.addToHistoryController);

// userRoutes.get("/history", authUser, userController.getHistoryController);



module.exports = userRoutes;
const userModel = require("../models/user.model");
const favoriteMovieModel = require("../models/favoriteMovie");
const customMovieModel = require("../models/customMovie.models");
//get user profile
async function getUserProfileController(req, res) {


  try {
    const userId = req.user.id;

    // Fetch user details
    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    res.status(200).json({
      message: "User profile retrieved successfully",
      user,
    });
  }
   catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}




async function updateUserProfileController(req, res) {
  try {
    const userId = req.user.id;
    const { userName, email } = req.body;

    const user = await userModel.findById(userId);
    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    // Update user details
    if (userName) user.userName = userName;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({
      message: "User profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}


async function getFavoriteMoviesController(req, res) {
  try {
    const userId = req.user.id;

    // Fetch favorite movies for the user
    const favoriteMovies = await favoriteMovieModel
      .find({ user: userId })
      .populate("CustomMovie");

    res.status(200).json({
      message: "Favorite movies retrieved successfully",
      favorites: favoriteMovies.map((fav) => fav.CustomMovie),
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}



async function addFavoriteMovieController(req, res) {
  try {
    const userId = req.user.id;
    const movieId = req.params.movieId;

    const user = await userModel.findById(userId);
    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    const movie = await customMovieModel.findById(movieId);
    if (!movie) {
      const err = new Error("Movie not found");
      err.statusCode = 404;
      throw err;
    }
const favoriteMovie = await favoriteMovieModel.create({
      user: userId,
      CustomMovie: movieId,
})

    res.status(201).json({
      message: "Movie added to favorites successfully",
      favorite: favoriteMovie,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}

module.exports = {
  getUserProfileController,
  updateUserProfileController,
  getFavoriteMoviesController,
  addFavoriteMovieController
};

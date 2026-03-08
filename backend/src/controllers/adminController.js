const userModel = require("../models/user.model");
const cachedMovieModel = require("../models/cacheMovie");
const jwt = require("jsonwebtoken");
const storageService = require("../services/storage.service");
const customMovieModel = require("../models/customMovie.models");
//user can make another user admin
async function makeAdminController(req, res) {
  try {
    const userId = req.params.userId;
    const isAlreadyAdmin = await userModel.findOne({
      _id: userId,
      role: "admin",
    });

    if (isAlreadyAdmin) {
      return res.status(400).json({
        message: "User is already an admin",
      });
    }

    const user = await userModel.findByIdAndUpdate(
      userId,
      { role: "admin" },
      { returnDocument: "after" },
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

//admin can see all users
async function getAllUsersController(req, res) {
  const user = await userModel.find();
  res.json({
    message: "All users retrieved successfully",
    user,
  });
}

//admin can ban a user
async function banUserController(req, res) {
  try {
    const userId = req.params.userId;

    const user = await userModel.findById(userId);
    if (!user) {
      const e = new Error("User not found");
      e.statusCode = 404;
      throw e;
    }
    if (user.role === "admin") {
      const e = new Error("Cannot ban an admin");
      e.statusCode = 400;
      throw e;
    }
    user.isBanned = true;
    await user.save();
    res.status(200).json({
      message: "User banned successfully",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

//admin can unban a user
async function unbanUserController(req, res) {
  try {
    const userId = req.params.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      const e = new Error("User not found");
      e.statusCode = 404;
      throw e;
    }
    user.isBanned = false;
    await user.save();
    res.status(200).json({
      message: "User unbanned successfully",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

//admin can delete a user
async function deleteUserController(req, res) {
  try {
    const userId = req.params.userId;
    const user = await userModel.findByIdAndDelete(userId);
    if (!user) {
      const e = new Error("User not found");
      e.statusCode = 404;
      throw e;
    }

    if (user.role == "admin") {
      const e = new Error("Cannot delete an admin");
      e.statusCode = 400;
      throw e;
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

async function getAllMoviesController(req, res) {
  try {
    const movies = await cachedMovieModel
      .find({ addedByAdmin: true })
      .sort({ createdAt: -1 });
    res.status(200).json({
      message: "All movies retrieved successfully",
      movies,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function addMovieController(req, res) {
  try {
    const {
      tmdbId,
      title,
      description,
      releaseDate,
      genre,
      category = "originals",
      actorNames,
      duration,
      videoUrl,
    } = req.body;

    const userId = req.user.id;

    if (!req.file) {
      const err = new Error("Poster file is required");
      err.statusCode = 400;
      throw err;
    }


    console.log("File received:", req.file);
    console.log("Uploading to ImageKit...");
    const postBuffer = req.file.buffer;

    const posterUrl = await storageService.uploadFile({
      buffer: postBuffer,
      filename: title + ".jpeg",
      folder: "movie-posters",
    });

    console.log("Poster uploaded:", posterUrl);

    const existing = await customMovieModel.findOne({ tmdbId });

    if (existing) {
      const err = new Error("Movie already exists");
      err.statusCode = 409;
      throw err;
    }

    const movie = await customMovieModel.create({
      tmdbId,
      title,
      description,
      releaseDate,
      genre: genre.toLowerCase(),
      category,
      actorNames,
      duration,
      posterUrl,
      videoUrl,
      addedBy: userId,
    });

    res.status(201).json({
      message: "Movie added successfully",
      movie,
    });

  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}

module.exports = {
  makeAdminController,
  getAllUsersController,
  banUserController,
  unbanUserController,
  deleteUserController,
  getAllMoviesController,
  addMovieController,
};

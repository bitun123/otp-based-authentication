const mongoose = require("mongoose");

/**
 * Favorite — one document per (user, movie) pair.
 * Storing as a separate collection (instead of embedded in User)
 * keeps the User document small and allows efficient queries.
 */
const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },
    CustomMovie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomMovie",
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

// Compound unique: one user cannot favorite the same movie twice
// favoriteSchema.index({ user: 1, CustomMovie: 1 }, { unique: true });

const favoriteMovieModels = mongoose.model("Favorite", favoriteSchema);

module.exports = favoriteMovieModels;

const mongoose = require("mongoose");

const customMovieSchema = new mongoose.Schema(
  {
    tmdbId: {
      type: Number,
      required: [true, "TMDB ID is required"],
      unique: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    releaseDate: {
      type: Date,
      required: [true, "Release date is required"],
      index: true,
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      trim: true,
      lowercase: true,
      enum: ["action", "comedy", "drama", "horror", "romance", "thriller", "sci-fi", "fantasy", "documentary"],
    },
    // NEW: Dashboard par segregation ke liye
    category: {
      type: String,
      enum: ["trending", "featured", "originals", "popular"],
      default: "originals"
    },
    actorNames: {
      type: [String],
      default: []
    },
    // duration: {
    //   type: String, // e.g., "145 min" ya "2h 25m"
    //   trim: true
    // },
    posterUrl: {
      type: String,
      required: [true, "Poster URL is required"],
      trim: true,
      match: [/^https?:\/\/.+\..+/, "Please enter a valid URL"],
    },

    // trailerUrl: {
    //   type: String,
    //   trim: true,
    //   match: [/^https?:\/\/.+\..+/, "Please enter a valid URL"],
    // },
    // averageRating: {
    //   type: Number,
    //   default: 0,
    //   min: [0, "Rating cannot be less than 0"],
    //   max: [10, "Rating cannot be more than 10"]
    // },
    totalRatings: {
      type: Number,
      default: 0,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound index for faster searching
customMovieSchema.index({ title: "text", description: "text" }); 
customMovieSchema.index({ category: 1, releaseDate: -1 });

const customMovieModel = mongoose.model("CustomMovie", customMovieSchema);

module.exports = customMovieModel;
const mongoose = require("mongoose");

/**
 * CachedMovie — admin-curated or TMDB-cached movie metadata.
 * Admin can add/edit/delete entries; the API prefers TMDB data but falls back here.
 */
const cachedMovieSchema = new mongoose.Schema(
  {
    tmdbId: {
      type: Number,
      required: [true, "TMDB ID is required"],
      unique: true,
      index: true,
    },
    title: { type: String, required: [true, "Title is required"] },
    overview: { type: String, default: "" },
    poster: { type: String, default: "" },
    backdrop: { type: String, default: "" },
    releaseDate: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    genres: [{ type: String }],
    mediaType: { type: String, enum: ["movie", "tv"], default: "movie" },
    adminNote: { type: String, default: "" },
    addedByAdmin: { type: Boolean, default: false },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const CachedMovie = mongoose.model("CachedMovie", cachedMovieSchema);

module.exports = CachedMovie;

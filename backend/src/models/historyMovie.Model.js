const mongoose = require("mongoose")

const watchHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  customMovie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true
  },

  watchedAt: {
    type: Date,
    default: Date.now
  }
});

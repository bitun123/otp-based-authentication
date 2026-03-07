const mongoose   = require("mongoose");


const ratingSchema = new mongoose.Schema(
{
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customMovieModel",
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }
},
{
  timestamps: true
}
);


const ratingModel = mongoose.model("rating", ratingSchema);

module.exports = ratingModel;
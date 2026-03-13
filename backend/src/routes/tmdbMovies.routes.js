const {Router} =  require("express")

const tmdbMovieController = require("../controllers/tmdbMovieController");
const { authUser } = require("../middleware/auth.middleware");


const tmdbRoutes = Router();

//tmdb routes all Movies 
tmdbRoutes.get("/trending-movies", tmdbMovieController.getTrendingAllMoviesController);
tmdbRoutes.get("/popular-movies", tmdbMovieController.getPopularMoviesController);
tmdbRoutes.get("/top-rated-movies", tmdbMovieController.getTopRatedMoviesController);
tmdbRoutes.get("/upcoming-movies", tmdbMovieController.getUpcomingMoviesController);
tmdbRoutes.get("/movies/:id/details",authUser, tmdbMovieController.getDetailsMoviesController);
tmdbRoutes.get("/movies/:id/videos", authUser,tmdbMovieController.getVideoMoviesController);
tmdbRoutes.get("/movies/:id/credits",authUser, tmdbMovieController.getCreditsMoviesController);
tmdbRoutes.get("/movies/:id/similar",authUser, tmdbMovieController.getSimilarMoviesController);
tmdbRoutes.get("/movies/:id/recommendations",authUser, tmdbMovieController.getRecommendationsMoviesController);
module.exports = tmdbRoutes;
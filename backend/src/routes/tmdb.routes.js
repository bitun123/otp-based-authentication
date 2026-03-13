const {Router} =  require("express")

const tmdbController = require("../controllers/tmdbController");
const { authUser } = require("../middleware/auth.middleware");


const tmdbRoutes = Router();

//tmdb routes all 
tmdbRoutes.get("/trending-movies", tmdbController.getTrendingAllMoviesController);
tmdbRoutes.get("/popular-movies", tmdbController.getPopularMoviesController);
tmdbRoutes.get("/top-rated-movies", tmdbController.getTopRatedMoviesController);
tmdbRoutes.get("/upcoming-movies", tmdbController.getUpcomingMoviesController);
tmdbRoutes.get("/movies/:id/details",authUser, tmdbController.getDetailsMoviesController);
tmdbRoutes.get("/movies/:id/videos", authUser,tmdbController.getVideoMoviesController);
tmdbRoutes.get("/movies/:id/credits",authUser, tmdbController.getCreditsMoviesController);
tmdbRoutes.get("/movies/:id/similar",authUser, tmdbController.getSimilarMoviesController);
tmdbRoutes.get("/movies/:id/recommendations",authUser, tmdbController.getRecommendationsMoviesController);
module.exports = tmdbRoutes;
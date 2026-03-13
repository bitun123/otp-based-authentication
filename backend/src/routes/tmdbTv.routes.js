const {Router} = require("express")
const tmdbTvController = require("../controllers/tmdbTvController")

const { authUser } = require("../middleware/auth.middleware");

const tmdbTvRoutes = Router();

tmdbTvRoutes.get("/trending-tvs", tmdbTvController.getTrendingAllTvsController);
tmdbTvRoutes.get("/popular-tvs", tmdbTvController.getPopularTvsController);
tmdbTvRoutes.get("/top-rated-tvs", tmdbTvController.getTopRatedTvsController);
tmdbTvRoutes.get("/upcoming-tvs", tmdbTvController.getUpcomingTvsController);
tmdbTvRoutes.get("/tvs/:id/details",authUser, tmdbTvController.getDetailsTvsController);
tmdbTvRoutes.get("/tvs/:id/videos", authUser,tmdbTvController.getVideoTvsController);
tmdbTvRoutes.get("/tvs/:id/credits",authUser, tmdbTvController.getCreditsTvsController);
tmdbTvRoutes.get("/tvs/:id/similar",authUser, tmdbTvController.getSimilarTvsController);
tmdbTvRoutes.get("/tvs/:id/recommendations",authUser, tmdbTvController.getRecommendationsTvsController);
tmdbTvRoutes.get("/tvs/:id/season/:season",authUser, tmdbTvController.getSeasonDetailsTvsController);
tmdbTvRoutes.get("/genres", tmdbTvController.getGenresTvsController);

module.exports = tmdbTvRoutes;



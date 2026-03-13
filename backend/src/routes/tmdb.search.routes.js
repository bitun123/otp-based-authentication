const {Router}  = require("express")

const tmdbSearchController  = require("../controllers/tmdbSearchController")

const tmdbSearchRoutes = Router();

tmdbSearchRoutes.get("search/multi", tmdbSearchController.getSearchMulti);
tmdbSearchRoutes.get("search/movies", tmdbSearchController.getSearchMovies);
tmdbSearchRoutes.get("search/tv", tmdbSearchController.getSearchTvShows);
tmdbSearchRoutes.get("search/people", tmdbSearchController.getSearchPeople);

module.exports = tmdbSearchRoutes;
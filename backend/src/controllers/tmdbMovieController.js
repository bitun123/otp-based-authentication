const tmdbService = require("../services/tmdbService");

const getTrendingAllMoviesController = async (req, res) => {
  try {
    const { page = 1, window = "week" } = req.query;
    const movies = await tmdbService.getTrendingMovies.getAll(window, page);
    res.json({
      success: true,
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPopularMoviesController = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const movies = await tmdbService.getMovie.getPopular(page);
    res.json({
      success: true,
      data: movies,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch popular movies");
  }
};
const getTopRatedMoviesController = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const movies = await tmdbService.getMovie.getTopRated(page);
    res.json({
      success: true,
      data: movies,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch top rated movies");
  }
};

const getUpcomingMoviesController = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const movies = await tmdbService.getMovie.getUpcoming(page);
    res.json({
      success: true,
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

const getDetailsMoviesController = async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await tmdbService.getMovie.getDetails(id);
    res.json({
      success: true,
      data: movies,
    });
  }
    catch (error) {
    console.log(error);
    }
}

const getVideoMoviesController = async (req, res) => {
  try {
    const { id } = req.params;
const videos = await tmdbService.getMovie.getVideos(id);
    res.json({
      success: true,
      data: videos,
    });
  } catch (error) {
    console.log(error);
  }
}


const getCreditsMoviesController = async (req, res) => {
  try {
    const { id } = req.params;
    const credits = await tmdbService.getMovie.getCredits(id);
    res.json({
      success: true,
      data: credits,
    });
  } catch (error) {
    console.log(error);
  }}

const getSimilarMoviesController = async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1 } = req.query;
    const movies = await tmdbService.getMovie.getSimilar(id, page);
    res.json({
        success: true,
    data: movies,
    })
}
catch(error){
    console.log(error);
}
}


const getRecommendationsMoviesController = async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1 } = req.query;
    const movies = await tmdbService.getMovie.getRecommendations(id, page);
    res.json({
        success: true,
    data: movies,
    })  
}   
catch(error){
    console.log(error);
}   
}

module.exports = {
  getTrendingAllMoviesController,
  getPopularMoviesController,
  getTopRatedMoviesController,
  getUpcomingMoviesController,
  getVideoMoviesController,
  getDetailsMoviesController,
  getCreditsMoviesController,
  getSimilarMoviesController,
  getRecommendationsMoviesController
  
};

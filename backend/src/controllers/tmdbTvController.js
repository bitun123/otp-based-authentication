const tmdbService = require("../services/tmdbService");

const getTrendingAllTvsController = async (req, res) => {
  try {
    const { window = 'week', page = 1 } = req.query;
    const data = await tmdbService.getTv.getTrending(window, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPopularTvsController = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getPopular(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopRatedTvsController = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getTopRated(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAiringTodayTvController = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getAiringToday(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOnTheAirTvController = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getOnTheAir(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDetailsTvsController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tmdbService.getTv.getDetails(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVideoTvsController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tmdbService.getTv.getVideos(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCreditsTvsController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tmdbService.getTv.getCredits(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSimilarTvsController = async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getSimilar(id, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSeasonDetailsTvsController = async (req, res) => {
  try {
    const { id, season } = req.params;
    const data = await tmdbService.getTv.getSeasonDetails(id, season);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGenresTvsController = async (req, res) => {
  try {
    const data = await tmdbService.getTv.getGenres();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTrendingAllTvsController,
  getPopularTvsController,
  getTopRatedTvsController,
  getAiringTodayTvController,
  getOnTheAirTvController,
  getDetailsTvsController,
  getVideoTvsController,
  getCreditsTvsController,
  getSimilarTvsController,
  getSeasonDetailsTvsController,
  getGenresTvsController
};
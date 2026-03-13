const tmdbService = require("../services/tmdbService");

const getTrendingTv = async (req, res) => {
  try {
    const { window = 'week', page = 1 } = req.query;
    const data = await tmdbService.getTv.getTrending(window, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPopularTv = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getPopular(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopRatedTv = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getTopRated(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAiringTodayTv = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getAiringToday(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOnTheAirTv = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getOnTheAir(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTvDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tmdbService.getTv.getDetails(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTvVideos = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tmdbService.getTv.getVideos(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTvCredits = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tmdbService.getTv.getCredits(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSimilarTv = async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1 } = req.query;
    const data = await tmdbService.getTv.getSimilar(id, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTvSeasonDetails = async (req, res) => {
  try {
    const { id, season } = req.params;
    const data = await tmdbService.getTv.getSeasonDetails(id, season);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTvGenres = async (req, res) => {
  try {
    const data = await tmdbService.getTv.getGenres();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTrendingTv,
  getPopularTv,
  getTopRatedTv,
  getAiringTodayTv,
  getOnTheAirTv,
  getTvDetails,
  getTvVideos,
  getTvCredits,
  getSimilarTv,
  getTvSeasonDetails,
  getTvGenres
};
const tmdbService = require("../services/tmdbService");

const getSearchMulti = async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const data = await tmdbService.search.SearchMulti(query, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSearchMovies = async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const data = await tmdbService.search.SearchMovies(query, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSearchTvShows = async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const data = await tmdbService.search.SearchTvShows(query, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSearchPeople = async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const data = await tmdbService.search.SearchPeople(query, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSearchMulti,
  getSearchMovies,
  getSearchTvShows,
  getSearchPeople
};

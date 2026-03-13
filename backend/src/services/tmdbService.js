const axios = require("axios");

const api = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
});

const get = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

const getMovie  = {
     getTrending: (window = 'week', page = 1) => get(`/trending/movie/${window}`, { page }),
    getPopular: (page = 1) => get('/movie/popular', { page }),
    getNowPlaying: (page = 1) => get('/movie/now_playing', { page }),
    getTopRated: (page = 1) => get('/movie/top_rated', { page }),
    getUpcoming: (page = 1) => get('/movie/upcoming', { page }),
    getDetails: (id) => get(`/movie/${id}`),
    getVideos: (id) => get(`/movie/${id}/videos`),
    getCredits: (id) => get(`/movie/${id}/credits`),
    getSimilar: (id, page = 1) => get(`/movie/${id}/similar`, { page }),
    getRecommendations: (id, page = 1) => get(`/movie/${id}/recommendations`, { page }),
    getGenres: () => get('/genre/movie/list'),
}

const getTv = {
   getTrending: (window = 'week', page = 1) => get(`/trending/tv/${window}`, { page }),
    getPopular: (page = 1) => get('/tv/popular', { page }),
    getTopRated: (page = 1) => get('/tv/top_rated', { page }),
    getAiringToday: (page = 1) => get('/tv/airing_today', { page }),
    getTvDetails: (tvId) => get(`/tv/${tvId}`),
}

const search = {
    SearchMulti: (query, page = 1) => get('/search/multi', { query, page }),
    SearchMovies: (query, page = 1) => get('/search/movie', { query, page }),
    SearchTvShows: (query, page = 1) => get('/search/tv', { query, page }),
    SearchPeople: (query, page = 1) => get('/search/person', { query, page }),
}


const getTrendingMovies = {
        getAll: (window = 'week', page = 1) => get(`/trending/all/${window}`, { page }),
}

module.exports = {
    getMovie,
    getTv,
    search,
    getTrendingMovies
};
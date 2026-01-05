const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// ✅ Popular Movies
export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

// ✅ Search Movies
export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
};

// 🔍 Movie Details
export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return await res.json();
};

// 👥 Cast & Crew
export const getMovieCredits = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return await res.json(); // returns { id, cast, crew }
};

// 📺 Trailers & Videos
export const getMovieVideos = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
  return await res.json(); // returns { id, results }
};

// 📈 Trending Movies
export const getTrendingMovies = async (timeWindow = "day") => {
  const res = await fetch(`${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

// 🎭 Genres
export const getGenres = async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  return data.genres;
};

// 🎬 Discover by Genre
export const getMoviesByGenre = async (genreId) => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  const data = await res.json();
  return data.results;
};
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits, getMovieVideos } from "../services/api";
import CastList from "../components/CastList";
import TrailerEmbed from "../components/TrailerEmbed";
import { useMovieContext } from "../contexts/MovieContext"; // ✅ import context
import "../css/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext(); // ✅ use context
  const favorite = isFavorite(Number(id));

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const details = await getMovieDetails(id);
        const credits = await getMovieCredits(id);
        const vids = await getMovieVideos(id);

        setMovie(details);
        setCast(credits.cast || []);
        setVideos(vids.results || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie details...");
      } finally {
        setLoading(false);
      }
    };
    loadMovieData();
  }, [id]);

  function onFavoriteClick() {
    if (favorite) removeFromFavorites(Number(id));
    else addToFavorites(movie);
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return null;

  const genreNames = movie.genres?.map((g) => g.name) || [];

  return (
    <div className="movie-details">
      <div className="movie-header">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/fallback-poster.png"
          }
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} min</p>
          <p><strong>Genres:</strong> {genreNames.join(", ")}</p>
          <p><strong>Rating:</strong> {movie.vote_average}/10</p>

          {/* ✅ Favorite button in details */}
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥ {favorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>

      <h3>Cast</h3>
      <CastList cast={cast} />

      <h3>Trailer</h3>
      <TrailerEmbed videos={videos} />
    </div>
  );
}

export default MovieDetails;

import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Trending.css";

function Trending() {
  const [movies, setMovies] = useState([]);
  const [timeWindow, setTimeWindow] = useState("day"); // "day" or "week"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTrending = async () => {
      setLoading(true);
      try {
        const data = await getTrendingMovies(timeWindow);
        setMovies(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load trending movies...");
      } finally {
        setLoading(false);
      }
    };
    loadTrending();
  }, [timeWindow]);

  return (
    <div className="trending-container">
      <h2 className="trending-title">Trending Movies</h2>

      <div className="time-toggle">
        <button
          className={timeWindow === "day" ? "active" : ""}
          onClick={() => setTimeWindow("day")}
        >
          Today
        </button>
        <button
          className={timeWindow === "week" ? "active" : ""}
          onClick={() => setTimeWindow("week")}
        >
          This Week
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Trending;
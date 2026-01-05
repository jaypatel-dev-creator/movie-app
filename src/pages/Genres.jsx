import { useState, useEffect } from "react";
import { getGenres, getMoviesByGenre } from "../services/api";
import Genre from "../components/Genre";
import MovieCard from "../components/MovieCard";
import "../css/Genres.css";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const loadGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    };
    loadGenres();
  }, []);

  const handleSelectGenre = async (genreId) => {
    setSelectedGenre(genreId);
    const data = await getMoviesByGenre(genreId);
    setMovies(data);
  };

  return (
    <div className="genres-container">
      <h2 className="genres-title">Browse by Genre</h2>
      <div className="genres-grid">
        {genres.map((genre) => (
          <Genre key={genre.id} genre={genre} onSelect={handleSelectGenre} />
        ))}
      </div>

      {selectedGenre && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Genres;
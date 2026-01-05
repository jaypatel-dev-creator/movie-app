
// import "../css/MovieCard.css";
// import { useMovieContext } from "../contexts/MovieContext";
// import { Link } from "react-router-dom";

// function MovieCard({ movie }) {
//   const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
//   const favorite = isFavorite(movie.id);

//   function onFavoriteClick(e) {
//     e.preventDefault();
//     if (favorite) removeFromFavorites(movie.id);
//     else addToFavorites(movie);
//   }

//   return (
//     <Link to={`/movie/${movie.id}`} className="movie-card-link">
//       <div className="movie-card">
//         <div className="movie-poster">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//           />
//           {/* ✅ Button always visible */}
//           <button
//             className={`favorite-btn ${favorite ? "active" : ""}`}
//             onClick={onFavoriteClick}
//           >
//             ♥
//           </button>

//           {/* Overlay still fades in on hover */}
//           <div className="movie-overlay"></div>
//         </div>
//         <div className="movie-info">
//           <h3>{movie.title}</h3>
//           <p>{movie.release_date?.split("-")[0]}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default MovieCard;
import { useMovieContext } from "../contexts/MovieContext";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <Link to={`/movie/${movie.id}`} className="group ">
      <div className="relative overflow-hidden rounded-xl bg-neutral-900 transition-transform hover:-translate-y-1">
        
        {/* Poster */}
        <div className="relative w-full pt-[150%]">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

          {/* Favorite button */}
          <button
            onClick={onFavoriteClick}
            className={`absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full 
            bg-black/60 text-xl transition hover:bg-black/90
            ${favorite ? "text-red-500" : "text-white"}`}
          >
            ♥
          </button>
        </div>

        {/* Info */}
        <div className="space-y-1 p-4">
          <h3 className="line-clamp-2 text-sm font-semibold text-white">
            {movie.title}
          </h3>
          <p className="text-xs text-neutral-400">
            {movie.release_date?.split("-")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

// import MovieCard from "../components/MovieCard";
// import { useState, useEffect } from "react";
// import { searchMovies, getPopularMovies } from "../services/api";
// // import "../css/Home.css";

// function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadPopularMovies = async () => {
//       try {
//         const popularMovies = await getPopularMovies();
//         setMovies(popularMovies);
//       } catch (err) {
//         console.log(err);
//         setError("Failed to load movies...");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPopularMovies();
//   }, []);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;
//     if (loading) return;

//     setLoading(true);
//     try {
//       const searchResults = await searchMovies(searchQuery);
//       setMovies(searchResults);
//       setError(null);
//     } catch (err) {
//       console.log(err);
//       setError("Failed to search movies...");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="home">
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           placeholder="Search for movies..."
//           className="search-input"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button type="submit" className="search-button">
//           Search
//         </button>
//       </form>

//       {error && <div className="error-message">{error}</div>}

//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//  <div
//   className="
//     mx-auto
//     max-w-7xl
//     grid
//     grid-cols-2
//     gap-6
//     px-4
//     sm:grid-cols-3
//     md:grid-cols-4
//     lg:grid-cols-5
//     xl:grid-cols-6
//   "
// >

//           {movies.map((movie) => (
//             <MovieCard movie={movie} key={movie.id} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-8">
      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="mx-auto mb-8 flex max-w-xl gap-4 px-4"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 rounded bg-neutral-800 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-neutral-500"
        />

        <button
          type="submit"
          className="whitespace-nowrap rounded bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Search
        </button>
      </form>

      {error && (
        <div className="mb-4 text-center text-red-400">{error}</div>
      )}

      {loading ? (
        <div className="text-center text-neutral-400">Loading...</div>
      ) : (
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="
              grid
              grid-cols-2
              gap-6
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
            "
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

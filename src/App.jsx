import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext"; // ✅ import provider

function App() {
  return (
    <MovieProvider> {/* ✅ wrap everything in provider */}
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

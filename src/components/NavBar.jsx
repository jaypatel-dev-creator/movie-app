
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="logo.png"
          alt="Cinex logo"
          className="navbar-logo"
        />

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/trending" onClick={() => setMenuOpen(false)}>Trending</Link>
        </li>
        <li>
          <Link to="/genres" onClick={() => setMenuOpen(false)}>Genres</Link>
        </li>
        <li>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;


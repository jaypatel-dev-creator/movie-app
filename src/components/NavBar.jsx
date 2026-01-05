import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
<img
  src="logo.png"
  alt="Cinex logo"
  style={{
    height: "32px",
    width: "auto",
    display: "block"
  }}
/>





      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

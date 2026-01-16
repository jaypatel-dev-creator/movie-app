# CINEX

A responsive movie discovery app built with **React + Vite**, powered by the **TMDB API**. This project demonstrates modern frontend architecture, reusable components, context management, and dynamic routing.

---

## Features

- **Movie Grid Display**  
  - Responsive grid layout for trending, popular, and genre‑based movies.
  - Dynamic rendering of `MovieCard` components with poster, title, and release year.

- **Movie Details Page**  
  - Detailed view with poster, metadata, cast list, and embedded trailers.
  - Cast cards with actor name and character role.
  - Trailer embed via YouTube iframe.

- **Favorites System**  
  - Add/remove movies from favorites using a heart ♥ button.
  - Favorites persisted in context (`FavoritesContext`).
  - Dedicated Favorites page with animated entry of new items.
  

- **Hover Overlay Effects**  
  - Gradient overlay on movie posters with smooth transitions.
  - Interactive UI with hover animations.

- **Responsive Design**  
  - Mobile‑friendly layouts using CSS grid and media queries.
  - Adaptive button sizing and typography.

- **Routing**  
  - Client‑side navigation with `react-router-dom`.
  - Pages: Home, Movie Details, Trending, Genres, Favorites.

- **API Integration**  
  - TMDB endpoints for trending, genres, movie details, credits, and videos.
  - Modular service layer (`api.js`) with reusable functions.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React (with Vite for fast builds)
- **Routing:** React Router
- **State Management:** React Context API
- **Styling:** CSS modules with responsive design along with Tailwind 
- **API:** TMDB (The Movie Database)
- **Tooling:** npm, ES6+, modern hooks (`useState`, `useEffect`, `useContext`)

---

## 📂 Project Structure

src/
├── **components/**  
│   ├── **MovieCard.jsx**  
│   ├── **CastList.jsx**  
│   ├── **TrailerEmbed.jsx**  
│   └── ...  
├── **pages/**  
│   ├── **Home.jsx**  
│   ├── **MovieDetails.jsx**  
│   ├── **Trending.jsx**  
│   ├── **Genres.jsx**  
│   └── **Favorites.jsx**  
├── **contexts/**  
│   ├── **FavoritesContext.jsx**  
│   └── **GenresContext.jsx**  
├── **services/**  
│   └── **api.js**  
├── **css/**  
│   ├── **App.css**  
│   ├── **Home.css**  
│   ├── **Favorites.css**  
│   ├── **MovieDetails.css**  
│   └── ...  
└── **main.jsx*

---

## 🌐 Live Demo

Check out CINEX in action:

[🎬 View Live Demo](https://cinex-rust.vercel.app/)

---
## ⚠️ API Availability Note

This project uses the TMDB API. Due to regional network restrictions in India, movie data may not load for some users depending on their ISP or DNS configuration.
This limitation can be resolved by introducing a backend proxy layer to fetch TMDB data server-side and expose it to the frontend.

---
##  Future Enhancements

- Infinite scroll or pagination for movie lists  
- Search with autocomplete  
- User authentication for personalized favorites  
- Integration with a backend (Spring Boot) for persistence
  

---
## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x450?text=Home+Page+Screenshot)
*Responsive movie grid displaying trending, popular, and genre-based movies.*

### Movie Details Page
![Movie Details Page](https://via.placeholder.com/800x450?text=Movie+Details+Screenshot)
*Detailed view showing poster, metadata, cast list, and embedded trailers.*







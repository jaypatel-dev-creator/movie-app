import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { GenresProvider } from "./contexts/GenresContext";
import { MovieProvider } from "./contexts/MovieContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <GenresProvider>
          <App />
        </GenresProvider>
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>
);
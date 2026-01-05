import "../css/Genres.css";

function Genre({ genre, onSelect }) {
  return (
    <div
      className="genre-card"
      onClick={() => onSelect(genre.id)}
    >
      <p className="genre-name">{genre.name}</p>
    </div>
  );
}

export default Genre;
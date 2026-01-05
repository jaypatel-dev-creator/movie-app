import "../css/MovieDetails.css";

function CastList({ cast }) {
  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div className="cast-list">
      {cast.slice(0, 12).map((actor) => (
        <div key={actor.cast_id || actor.id} className="cast-card">
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : "/fallback-profile.png"
            }
            alt={actor.name}
            className="cast-image"
          />
          <p className="cast-name">{actor.name}</p>
          <p className="cast-character">as {actor.character}</p>
        </div>
      ))}
    </div>
  );
}

export default CastList;
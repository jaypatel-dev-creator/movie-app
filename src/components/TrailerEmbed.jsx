import "../css/MovieDetails.css";

function TrailerEmbed({ videos }) {
  if (!videos || videos.length === 0) {
    return <p>No trailers available.</p>;
  }

  // Filter for YouTube trailers
  const trailer = videos.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  );

  if (!trailer) {
    return <p>No YouTube trailer found.</p>;
  }

  return (
    <div className="trailer-container">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default TrailerEmbed;
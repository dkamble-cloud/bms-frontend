import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <img src={movie.image} alt={movie.title} />

      <div className="rating">
        ⭐ {movie.rating} {movie.votes}
      </div>

      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

    </div>
  );
}

export default MovieCard;
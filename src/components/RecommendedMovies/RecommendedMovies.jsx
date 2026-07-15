import "./RecommendedMovies.css";
import MovieCard from "../MovieCard/MovieCard";
import movies from "../data/movies";

function RecommendedMovies() {

  return (

    <section className="recommended">

      <div className="recommended-header">

        <h2>Recommended Movies</h2>

        <span>See All &gt;</span>

      </div>

      <div className="movies-container">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>

  );
}

export default RecommendedMovies;
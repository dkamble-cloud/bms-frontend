import { useEffect, useState } from "react";
import { getAllMovies, deleteMovie } from "../../api/movieApi";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";
import { Link } from "react-router-dom";

function MovieList() {

    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await getAllMovies();
            setMovies(response.data);
        } catch (error) {
            console.error(error);
            alert("Failed to load movies");
        }
    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this movie?");

        if (!confirmDelete) return;

        try {

            await deleteMovie(id);

            alert("Movie deleted successfully");

            fetchMovies();

        } catch (error) {
            console.error(error);
            alert("Failed to delete movie");
        }
    };


    return (
        <div className="movie-list-container">
            <h2>Movie List</h2>

            <table className="movie-table">

                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Title</th>
                        <th>Language</th>
                        <th>Genre</th>
                        <th>Status</th>
                        <th>Duration</th>
                        <th>Release Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {movies.map((movie) => (

                        <tr key={movie.id}>

                            <td>
                                <img
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    className="movie-poster"
                                />
                            </td>

                            <td>{movie.title}</td>

                            <td>{movie.language}</td>

                            <td>{movie.genre}</td>

                            <td>{movie.status}</td>

                            <td>{movie.duration} min</td>

                            <td>{movie.releaseDate}</td>

                            <td>

                                <Link to={`/admin/edit-movie/${movie.id}`}>
                                    <button className="edit-btn">
                                        Edit
                                    </button>
                                </Link>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(movie.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>
        </div>
    );
}

export default MovieList;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, updateMovie } from "../../api/movieApi";
import "./EditMovie.css";

function EditMovie() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({
        title: "",
        description: "",
        duration: "",
        releaseDate: "",
        language: "HINDI",
        genre: "ACTION",
        certificate: "UA",
        posterUrl: "",
        trailerUrl: "",
        director: "",
        cast: "",
        status: "COMING_SOON"
    });

    useEffect(() => {
        fetchMovie();
    }, []);

    const fetchMovie = async () => {
        try {

            const response = await getMovieById(id);

            setMovie(response.data);

        } catch (error) {
            console.error(error);
            alert("Failed to load movie");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setMovie({
            ...movie,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateMovie(id, movie);

            alert("Movie Updated Successfully");

            navigate("/admin/movies");

        } catch (error) {

            console.error(error);

            alert("Failed to update movie");
        }
    };

    return (
        <div className="edit-movie-container">

            <h2>Edit Movie</h2>



            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Movie Title</label>
                <br />
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={movie.title}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="description">Description</label>
                <br />
                <textarea
                    id="description"
                    name="description"
                    value={movie.description}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="duration">Duration (Minutes)</label>
                <br />
                <input
                    id="duration"
                    type="number"
                    name="duration"
                    value={movie.duration}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="releaseDate">Release Date</label>
                <br />
                <input
                    id="releaseDate"
                    type="date"
                    name="releaseDate"
                    value={movie.releaseDate}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="language">Language</label>
                <br />
                <select
                    id="language"
                    name="language"
                    value={movie.language}
                    onChange={handleChange}
                >
                    <option value="HINDI">HINDI</option>
                    <option value="ENGLISH">ENGLISH</option>
                    <option value="MARATHI">MARATHI</option>
                    <option value="TELUGU">TELUGU</option>
                    <option value="TAMIL">TAMIL</option>
                </select>

                <br /><br />

                <label htmlFor="genre">Genre</label>
                <br />
                <select
                    id="genre"
                    name="genre"
                    value={movie.genre}
                    onChange={handleChange}
                >
                    <option value="ACTION">ACTION</option>
                    <option value="COMEDY">COMEDY</option>
                    <option value="DRAMA">DRAMA</option>
                    <option value="HORROR">HORROR</option>
                    <option value="ROMANCE">ROMANCE</option>
                </select>

                <br /><br />

                <label htmlFor="certificate">Certificate</label>
                <br />
                <select
                    id="certificate"
                    name="certificate"
                    value={movie.certificate}
                    onChange={handleChange}
                >
                    <option value="U">U</option>
                    <option value="UA">UA</option>
                    <option value="A">A</option>
                </select>

                <br /><br />

                <label htmlFor="status">Status</label>
                <br />
                <select
                    id="status"
                    name="status"
                    value={movie.status}
                    onChange={handleChange}
                >
                    <option value="COMING_SOON">COMING_SOON</option>
                    <option value="NOW_SHOWING">NOW_SHOWING</option>
                    <option value="RELEASED">RELEASED</option>
                </select>

                <br /><br />

                <label htmlFor="director">Director</label>
                <br />
                <input
                    id="director"
                    type="text"
                    name="director"
                    value={movie.director}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="cast">Cast</label>
                <br />
                <input
                    id="cast"
                    type="text"
                    name="cast"
                    value={movie.cast}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="posterUrl">Poster URL</label>
                <br />
                <input
                    id="posterUrl"
                    type="text"
                    name="posterUrl"
                    value={movie.posterUrl}
                    onChange={handleChange}
                />

                <br /><br />

                <label htmlFor="trailerUrl">Trailer URL</label>
                <br />
                <input
                    id="trailerUrl"
                    type="text"
                    name="trailerUrl"
                    value={movie.trailerUrl}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit" className="update-btn">
                    Update Movie
                </button>

            </form>

        </div>
    );
}

export default EditMovie;
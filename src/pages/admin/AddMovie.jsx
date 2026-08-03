import { useState } from "react";
import { addMovie } from "../../api/movieApi";
import "./AddMovie.css";


function AddMovie() {

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
            await addMovie(movie);

            alert("Movie Added Successfully");

            setMovie({
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

        } catch (error) {
            console.error(error);
            alert("Failed to add movie");
        }
    };

    return (
        <div className="add-movie-container">
            <h2>Add Movie</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Movie Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={movie.title}
                    onChange={handleChange}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={movie.description}
                    onChange={handleChange}
                />

                <label htmlFor="duration">Duration (Minutes)</label>
                <input
                    id="duration"
                    type="number"
                    name="duration"
                    value={movie.duration}
                    onChange={handleChange}
                />

                <label htmlFor="releaseDate">Release Date</label>
                <input
                    id="releaseDate"
                    type="date"
                    name="releaseDate"
                    value={movie.releaseDate}
                    onChange={handleChange}
                />

                <label htmlFor="language">Language</label>
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

                <label htmlFor="genre">Genre</label>
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

                <label htmlFor="certificate">Certificate</label>
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

                <label htmlFor="status">Status</label>
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

                <label htmlFor="director">Director</label>
                <input
                    id="director"
                    type="text"
                    name="director"
                    value={movie.director}
                    onChange={handleChange}
                />

                <label htmlFor="cast">Cast</label>
                <input
                    id="cast"
                    type="text"
                    name="cast"
                    value={movie.cast}
                    onChange={handleChange}
                />

                <label htmlFor="posterUrl">Poster URL</label>
                <input
                    id="posterUrl"
                    type="text"
                    name="posterUrl"
                    value={movie.posterUrl}
                    onChange={handleChange}
                />

                <label htmlFor="trailerUrl">Trailer URL</label>
                <input
                    id="trailerUrl"
                    type="text"
                    name="trailerUrl"
                    value={movie.trailerUrl}
                    onChange={handleChange}
                />

                <button type="submit" className="add-btn">
                    Add Movie
                </button>

            </form>
        </div>
    );
}

export default AddMovie;
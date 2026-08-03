import axios from "axios";

const BASE_URL = "http://localhost:8080/api/admin/movies";

export const addMovie = (movie) => {
    return axios.post(BASE_URL, movie);
};

export const getAllMovies = () => {
    return axios.get(BASE_URL);
};

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};


export const updateMovie = (id, movie) => {
    return axios.put(`${BASE_URL}/${id}`, movie);
};

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};
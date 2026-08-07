import axios from "axios";

const BASE_URL = "http://localhost:8080/api/admin/movies";

const getAuthHeader = () => {
    const token = localStorage.getItem("token");

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const addMovie = (movie) => {
    return axios.post(BASE_URL, movie, getAuthHeader());
};

export const getAllMovies = () => {
    return axios.get(BASE_URL, getAuthHeader());
};

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/${id}`, getAuthHeader());
};

export const updateMovie = (id, movie) => {
    return axios.put(`${BASE_URL}/${id}`, movie, getAuthHeader());
};

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/${id}`, getAuthHeader());
};
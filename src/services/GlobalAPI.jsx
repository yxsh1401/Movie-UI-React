import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "eea082e6ab5efe488186ae6538557a2d";

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=eea082e6ab5efe488186ae6538557a2d';
// Function to get trending movies
const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/week?api_key=${api_key}`);
};
const getMovieByGenreId = (id) => {
    return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
};

export default {
    getTrendingVideos,
    getMovieByGenreId
};

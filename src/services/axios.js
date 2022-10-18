import axios from 'axios';

export const apiMovieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const apiFavorites = axios.create({
  baseURL: 'http://localhost:3000/',
});

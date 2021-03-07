import { createBrowserHistory } from 'history';

export const IMAGE_URL_W500 = 'https://image.tmdb.org/t/p/w500';
export const IMAGE_URL_W300 = 'https://image.tmdb.org/t/p/w300';
export const IMAGE_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';
export const API_URL = 'https://api.themoviedb.org/3';
export const API_URL_MOVIE = 'https://api.themoviedb.org/3/movie';
export const MOVIE_POPULAR = `${API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`;
export const MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;
export const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`;

export const browserHistory = createBrowserHistory();

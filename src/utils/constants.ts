import { createBrowserHistory } from 'history';

export const IMAGE_URL_W500 = 'https://image.tmdb.org/t/p/w500';
export const IMAGE_URL_W300 = 'https://image.tmdb.org/t/p/w300';
export const IMAGE_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';
export const API_URL = 'https://api.themoviedb.org/3';
export const API_URL_MOVIE = 'https://api.themoviedb.org/3/movie';
export const MOVIE_POPULAR = `${API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;
export const MOVIE_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const MOVIE_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`;
export const YOUTUBE_URL = 'https://www.youtube.com/embed/';
export const browserHistory = createBrowserHistory();

import {
    actorInfo,
    creditResponse,
    detailMovie,
    movieInfo,
    popularResponseType,
    video,
} from '../types';
import * as C from './constants';

export const requestDetail = (movieID: string) =>
    `${C.API_URL_MOVIE}/${movieID}${C.API_KEY}&language=ko-KR&append_to_response=similar,credits`;
export const requestSimilar = (movieID: string) =>
    `${C.API_URL_MOVIE}/${movieID}/similar${C.API_KEY}&language=kr-KR&page=1`;
export const requestProvider = (movieID: string) =>
    `${C.API_URL_MOVIE}/${movieID}/watch/providers${C.API_KEY}`;
export const requestCredit = (movieID: string) =>
    `${C.API_URL_MOVIE}/${movieID}/credits${C.API_KEY}&language=kr-KR`;
export const requestWithVideo = (movieID: string) =>
    `${C.API_URL_MOVIE}/${movieID}${C.API_KEY}&append_to_response=videos`;

export const fetcher = async (url: string) => fetch(url).then((res) => res.json());

export const requestType: { [req: string]: string } = {
    popular: C.MOVIE_POPULAR,
    topRated: C.MOVIE_TOP_RATED,
    playing: C.MOVIE_NOW_PLAYING,
};

export const getMovieList = async (req: string) => {
    const result = await fetcher(req);
    const movieArray: Array<movieInfo> = await result.results.reduce(
        (acc: Array<movieInfo>, cur: movieInfo) => acc.concat(cur),
        []
    );
    return movieArray;
};
export const getMovieDetail = async (req: string) => {
    const detail: detailMovie = await fetcher(requestDetail(req));
    return detail;
};
export const getMovieSimilar = async (req: string) => {
    const similar: popularResponseType = await fetcher(requestSimilar(req));
    return similar.results;
};
export const getMovieCredit = async (req: string) => {
    const credit: creditResponse = await fetcher(requestCredit(req));
    const castCredit: Array<actorInfo> = credit.cast;
    return castCredit;
};
export const getMovieVideo = async (id: string) => {
    const movie: detailMovie = await fetcher(requestWithVideo(id));
    let youtube: Array<video> = [];
    if (movie.videos) {
        youtube = movie.videos?.results.filter((value) => value.site === 'YouTube');
    }
    const trailer = {
        tagline: movie.tagline,
        title: movie.title,
        path: `${C.YOUTUBE_URL}${youtube[0].key}?autoplay=1&mute=1`,
    };
    return trailer;
};

import axios, { AxiosResponse } from 'axios';
import { actorInfo, creditResponse, detailMovie, movieInfo, movieList, video } from '../types';
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

export const fetcher = async (URL: string, params?: string) => {
    const response: AxiosResponse = await axios({
        method: 'GET',
        url: URL,
    });
    if (response.status !== 200) {
        throw new Error('error');
    }
    return response.data;
};

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
    const similar: movieList = await fetcher(requestSimilar(req));
    return similar.results;
};
export const getMovieCredit = async (req: string) => {
    const credit: creditResponse = await fetcher(requestCredit(req));
    const castCredit: Array<actorInfo> = credit.cast;
    return castCredit;
};
export const getMovieVideo = async (id: string) => {
    const movie: detailMovie = await fetcher(requestWithVideo(id));
    return movie;
};

export const videoPath = (randomMovie: detailMovie) => {
    let youtube: Array<video> = [];
    if (!randomMovie.videos) {
        return null;
    }
    youtube = randomMovie.videos.results.filter((value) => value.site === 'YouTube');
    if (youtube.length === 0 || !youtube[0].key) {
        return null;
    }
    return `${C.YOUTUBE_URL}${youtube[0].key}?autoplay=1&mute=1`;
};

import { actorInfo, creditResponse, detailMovie, movieInfo, popularResponseType } from '../types';
import { API_KEY, API_URL_MOVIE } from './constants';

export const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error('Error while fetching the data');
        error.message = await response.json();
        throw error;
    }
    const result = await response.json();
    return result;
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

export const requestDetail = (movieID: string) =>
    `${API_URL_MOVIE}/${movieID}${API_KEY}&language=ko-KR&append_to_response=similar,credits`;
export const requestSimilar = (movieID: string) =>
    `${API_URL_MOVIE}/${movieID}/similar${API_KEY}&language=kr-KR&page=1`;
export const requestProvider = (movieID: string) =>
    `${API_URL_MOVIE}/${movieID}/watch/providers${API_KEY}`;
export const requestCredit = (movieID: string) =>
    `${API_URL_MOVIE}/${movieID}/credits${API_KEY}&language=kr-KR`;

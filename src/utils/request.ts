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

export const requestDetail = (movieID: string) =>
    `${API_URL_MOVIE}/${movieID}${API_KEY}&language=kr-KR`;
export const requestSimilar = (movieID: string) =>
    `${API_URL_MOVIE}/${movieID}/similar${API_KEY}&language=kr-KR&page=1`;
export const requestProvider = (movieID: string) =>
    `${API_URL_MOVIE}/${movieID}/watch/providers${API_KEY}`;

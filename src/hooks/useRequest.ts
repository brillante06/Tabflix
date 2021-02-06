import React from 'react';
import { useSWRInfinite } from 'swr';
import { popularResponseType } from '../types';
import { fetcher } from '../utils/request';
import * as C from '../utils/constants';

export const useRequest = () => {
    const { data, error, size, setSize } = useSWRInfinite(
        (index) =>
            `${C.API_URL}/movie/popular?api_key=${
                process.env.REACT_APP_API_KEY
            }&language=ko-KR&page=${index + 1}`,
        fetcher
    );
    const PAGE_SIZE = 20;

    const movies: Array<popularResponseType> = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

    return { movies, error, isLoadingMore, size, setSize, isReachingEnd };
};

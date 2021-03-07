import React from 'react';
import { useSWRInfinite } from 'swr';
import { movieInfo, popularResponseType } from '../types';
import { fetcher } from '../utils/request';
import * as C from '../utils/constants';

export const useRequest = (url: string) => {
    const { data, error, size, setSize, mutate } = useSWRInfinite(
        (index) => `${url}${index + 1}`,
        fetcher
    );
    const PAGE_SIZE = 20;

    const response: Array<popularResponseType> = data ? [].concat(...data) : [];
    const movies: Array<movieInfo> = response.reduce(
        (acc: Array<movieInfo>, cur: popularResponseType) => acc.concat(...cur.results),
        []
    );
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');

    return { movies, error, isLoadingMore };
};

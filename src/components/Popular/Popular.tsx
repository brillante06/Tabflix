import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import useSWR, { useSWRInfinite } from 'swr';
import { useHistory } from 'react-router-dom';
import { fetcher } from '../../utils/request';
import * as S from './styles';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
import * as C from '../../utils/constants';
import { movieInfo, popularResponseType } from '../../types';
import { useRequest } from '../../hooks/useRequest';

const Popular: React.FC = () => {
    const history = useHistory();
    const loadingRef = useRef<HTMLDivElement>(null);
    const PAGE_SIZE = 20;
    const { movies, error, isLoadingMore, size, setSize, isReachingEnd } = useRequest();
    if (error) {
        return <h1>Somthing went wrong</h1>;
    }
    if (!movies) {
        return <h1>Loading...</h1>;
    }

    /* eslint-disable no-console */

    console.log('movie', movies);
    /* eslint-enable no-console */
    const onClick = (id: number) => {
        history.push(`/detail/${id}`);
    };

    return (
        <S.Container>
            <CardList>
                {movies.map((res: popularResponseType, id: number) =>
                    res.results.map((info: movieInfo, idx: number) => (
                        <Card
                            title={info.title}
                            onClick={onClick}
                            id={idx + 20 * id}
                            key={id * 20 + idx}
                            image={`${C.IMAGE_URL_ORIGINAL}${info.backdrop_path}`}
                        ></Card>
                    ))
                )}
            </CardList>
        </S.Container>
    );
};

export default Popular;

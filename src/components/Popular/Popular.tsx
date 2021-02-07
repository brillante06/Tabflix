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
import { useIntersecting } from '../../hooks/useIntersecting';

const Popular: React.FC = () => {
    const history = useHistory();
    const loadingRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const { movies, error, isLoadingMore, size, setSize, isReachingEnd } = useRequest();
    useIntersecting(size, setSize, loadingRef);
    if (error) {
        return <h1>Somthing went wrong</h1>;
    }
    if (!movies) {
        return <h1>Loading...</h1>;
    }
    const onClick = (movie: movieInfo, id: number) => {
        history.push(`/detail/${id}`, { movie });
    };

    return (
        <S.Container>
            <CardList>
                {movies.map((res: popularResponseType, id: number) =>
                    res.results.map((info: movieInfo, idx: number) => (
                        <Card
                            title={info.title}
                            onClick={onClick}
                            id={info.id}
                            key={idx}
                            image={`${C.IMAGE_URL_ORIGINAL}${info.backdrop_path}`}
                            movie={info}
                        ></Card>
                    ))
                )}
                <div ref={loadingRef}>{movies ? '' : 'loading'}</div>
            </CardList>
        </S.Container>
    );
};

export default Popular;

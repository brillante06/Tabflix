import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { detailMovie, movieInfo, watchProviderResponse } from '../../types';
import { fetcher, requestDetail, requestProvider, requestSimilar } from '../../utils/request';
import * as S from './styles';
import Loader from '../Loader';

interface movieID {
    id: string;
}
const Detail: FC<RouteComponentProps<movieID>> = ({ match }) => {
    const [detail, setDetail] = useState<detailMovie>();
    const [provider, setProvider] = useState<watchProviderResponse>();
    const [similar, setSimilar] = useState<Array<movieInfo>>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const movieDetail: detailMovie = await fetcher(requestDetail(match.params.id));
            setDetail(movieDetail);
            const movieProvider: watchProviderResponse = await fetcher(
                requestProvider(match.params.id)
            );
            setProvider(movieProvider);
            const movieSimilar: Array<movieInfo> = await fetcher(requestSimilar(match.params.id));
            setSimilar(movieSimilar);
            setIsLoading(false);
        };
        getData();
    }, []);
    return (
        <S.Container>
            <h1 data-testid="movie-title">{detail?.title}</h1>
        </S.Container>
    );
};

export default withRouter(Detail);

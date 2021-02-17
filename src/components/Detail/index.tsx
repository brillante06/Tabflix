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

    return (
        <S.Container>
            <h1 data-testid="movie-title">{detail?.title}</h1>
        </S.Container>
    );
};

export default withRouter(Detail);

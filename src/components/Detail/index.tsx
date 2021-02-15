import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as S from './styles';

interface movieID {
    id: string;
}
const Detail: FC<RouteComponentProps<movieID>> = ({ match, location, history }) => (
    <S.Container>
        <h1 data-testid="location-pathname">{match.params.id}</h1>
    </S.Container>
);

export default withRouter(Detail);

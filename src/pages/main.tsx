import React from 'react';
import Header from '../components/Header/';
import Popular from '../components/Popular/';
import * as S from './styles';

const Main: React.FC = () => (
    <S.Container>
        <Header />
        <Popular />
    </S.Container>
);

export default Main;

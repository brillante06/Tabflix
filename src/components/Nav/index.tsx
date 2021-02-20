import React from 'react';
import { Link } from 'react-router-dom';
import { Detail, Popular, Search } from '..';
import * as S from './styles';

const Header: React.FC = () => (
    <S.Container>
        <S.navigation>
            <Link to="/">home</Link>
        </S.navigation>
        <S.navigation>
            <Link to="/search">search</Link>
        </S.navigation>
    </S.Container>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Header: React.FC = () => (
    <S.Container>
        <S.HeaderName>Tabflix</S.HeaderName>
        <S.NavContainer>
            <S.navigation>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    🏠home
                </Link>
            </S.navigation>
            <S.navigation>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    🔍search
                </Link>
            </S.navigation>
        </S.NavContainer>
    </S.Container>
);

export default Header;

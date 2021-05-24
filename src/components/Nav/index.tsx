import React, { useState } from 'react';
import * as S from './styles';

const Header: React.FC = () => {
    const [active, setActive] = useState(false);
    return (
        <S.navBar>
            <S.Navigation to="/" style={{ fontFamily: 'Bebas Neue', fontSize: '3rem' }}>
                Tabflix
            </S.Navigation>
            <S.MenuButton href="#" onClick={() => setActive((prev) => !prev)}>
                <S.Menu></S.Menu>
                <S.Menu></S.Menu>
                <S.Menu></S.Menu>
            </S.MenuButton>
            <S.NavBarLinks isClick={active}>
                <S.UlContainer>
                    <S.LiContainer>
                        <S.Navigation to="/search">Search</S.Navigation>
                    </S.LiContainer>
                    <S.LiContainer>
                        <S.Navigation to="/about">About</S.Navigation>
                    </S.LiContainer>
                </S.UlContainer>
            </S.NavBarLinks>
        </S.navBar>
    );
};

export default Header;

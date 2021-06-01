import React, { useEffect, useState } from 'react';
import * as S from './styles';

const Header: React.FC = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(false);
    }, []);
    return (
        <S.NavBar>
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
                        <S.Navigation to="/search" onClick={() => setActive((prev) => !prev)}>
                            Search
                        </S.Navigation>
                    </S.LiContainer>
                    <S.LiContainer>
                        <S.Navigation to="/about" onClick={() => setActive((prev) => !prev)}>
                            About
                        </S.Navigation>
                    </S.LiContainer>
                </S.UlContainer>
            </S.NavBarLinks>
        </S.NavBar>
    );
};

export default Header;

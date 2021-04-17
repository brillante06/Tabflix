import React, { useContext } from 'react';
import * as S from './styles';
import { ThemeContext } from '../../App';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <S.Container theme={theme}>
            <S.Header>
                <S.NavContainer>
                    <S.CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
                    <S.CheckBoxLabel htmlFor="checkbox" />
                </S.NavContainer>
                <S.HeaderName to="/">Tabflix</S.HeaderName>
                <S.HeaderContainer>
                    <S.HeaderName to="/search">🔍Search</S.HeaderName>
                    <S.HeaderName to="/about">about</S.HeaderName>
                    <S.HeaderName to="/login">login</S.HeaderName>
                </S.HeaderContainer>
            </S.Header>
        </S.Container>
    );
};

export default Header;

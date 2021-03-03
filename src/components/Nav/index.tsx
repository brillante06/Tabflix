import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import sun from '../../assets/sun.jpg';
import night from '../../assets/night.jpg';
import { ThemeContext } from '../../App';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <S.Container>
            <S.CheckBoxContainer>
                <S.CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
                <S.CheckBoxLabel htmlFor="checkbox" />
            </S.CheckBoxContainer>
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
};

export default Header;

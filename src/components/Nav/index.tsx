import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import sun from '../../assets/sun.jpg';
import night from '../../assets/night.jpg';
import { ThemeContext } from '../../App';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <S.Container theme={theme}>
            <S.CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
            <S.CheckBoxLabel htmlFor="checkbox" />
            <S.HeaderName to="/">Tabflix</S.HeaderName>
            <S.navigation>
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    🔍search
                </Link>
            </S.navigation>
        </S.Container>
    );
};

export default Header;

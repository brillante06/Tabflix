import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Menu = styled.div``;

export const navBar = styled.nav`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: white;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const Title = styled(Link)`
    font-size: 3rem;
    margin: 0.5rem;
    font-family: 'Bebas Neue';
    text-decoration: none;
`;
export const MenuButton = styled.a`
    @media ${device.tablet} {
        display: flex;
    }
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    ${Menu} {
        height: 3px;
        width: 100%;
        border-radius: 10px;
        background-color: tomato;
        margin: 2px;
    }
`;
export const NavBarLinks = styled.section`
    margin: 0;
    padding: 0;
    height: 100%;
    @media ${device.tablet} {
        display: none;
        width: 100%;
        & .active {
            display: flex;
        }
    }
`;

export const Navigation = styled(Link)`
    margin: 0.8rem;
    color: tomato;
    text-decoration: none;
`;
export const NavContainer = styled.section``;

export const LiContainer = styled.li`
    list-style: none;
    @media ${device.tablet} {
        text-align: center;
        & .link {
            padding: 0.5rem 1rem;
        }
    }
    &:hover {
        background-color: seashell;
    }
    & .link {
        color: white;
        padding: 1rem;
        display: block;
        text-decoration: none;
        @media ${device.tablet} {
            padding: 0.5rem 1rem;
            text-align: center;
        }
    }
`;

export const UlContainer = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    @media ${device.tablet} {
        width: 100%;
        flex-direction: column;
    }
`;

export const HeaderContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    width: 95%;
    margin: -1.5rem auto 0;
`;

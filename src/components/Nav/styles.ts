import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Light, Theme } from '../../styles/theme';

interface props {
    theme: Theme;
}

export const Container = styled.nav<props>`
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 4.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: ${({ theme }) => theme.bgColor};
    margin: 0 auto 0;
`;
export const NavContainer = styled.section`
    display: flex;
    width: 60%;
`;
export const HeaderContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    width: 95%;
    margin: -1.5rem auto 0;
`;
export const navigation = styled.section`
    height: 2rem;
    margin: 1rem 1rem 0 1.5rem;
    text-decoration: none;
    font-size: 2.3rem;
`;
export const HeaderName = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    margin: -0.45rem 2em 0 1.5rem;
`;
export const DarkToggle = styled.button<props>`
    background: ${({ theme }) => theme.gradient};
    border: 5px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    height: 5rem;
    overflow: hidden;
    img {
        height: 100%;
        width: 1rem;
        transition: all 0.3s linear;
        &:first-child {
            transform: ${({ theme }) => theme.translateFirst};
        }
        &:nth-child(2) {
            transform: ${({ theme }) => theme.translateSecond};
        }
    }
`;

export const Emoji = styled.figure`
    width: 33px;
    height: 33px;
    border-radius: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CheckBoxContainer = styled.div`
    position: relative;
    margin-left: 1rem;
`;

export const CheckBoxLabel = styled.label`
    margin: 1.5rem 0 0 1rem;
    position: absolute;
    top: 0.1rem;
    left: 95%;
    right: 0.1;
    width: 2.6rem;
    height: 1.6rem;
    border-radius: 16px;
    background: #1e1e1e;
    cursor: pointer;
    &::after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;

export const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${CheckBoxLabel} {
        background: #bebebe;
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;

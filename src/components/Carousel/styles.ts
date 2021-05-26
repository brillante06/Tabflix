import styled from 'styled-components';
import { device } from '../../styles/theme';

interface isRight {
    rightIndex?: string;
}
export const Container = styled.article`
    position: relative;
    width: 80%;
    margin: 0 auto 0;
`;
export const Item = styled.li`
    flex: 0 0 calc(100% / 6);
    list-style: none;
`;
export const SlideContainer = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    @media ${device.tablet} {
        overflow-x: scroll;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            width: 0.6rem;
            height: 10px;
            border-radius: 2rem;
            background-color: gainsboro;
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 1px;
        }
    }
`;

export const Arrow = styled.button<isRight>`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;
    right: ${(props) => props.rightIndex};
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
    @media ${device.tablet} {
        display: none;
    }
`;

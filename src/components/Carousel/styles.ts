import styled from 'styled-components';
import { device } from '../../styles/theme';

interface isRight {
    rightIndex?: string;
}
export const Arrow = styled.button<isRight>`
    cursor: pointer;
    position: absolute;
    opacity: 0;
    top: 50%;
    width: auto;
    padding: 14px;
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
export const Container = styled.article`
    position: relative;
    width: 80%;
    margin: 0 auto 3rem;
    &:hover > ${Arrow} {
        opacity: 1;
    }
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

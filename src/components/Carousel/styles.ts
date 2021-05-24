import styled from 'styled-components';
import { device } from '../../styles/theme';

interface isRight {
    rightIndex?: string;
}
export const Container = styled.article`
    position: relative;
    margin: 0 auto 5rem;
    overflow: hidden;
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 100%);
    scroll-behavior: smooth;
`;
export const Item = styled.section``;
export const SlideContainer = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    -webkit-overflow-scrolling: touch;
    grid-gap: 1rem;
    width: 100%;
    scroll-behavior: smooth;
    overflow-y: hidden;
    overflow-x: hidden;
    @media ${device.tablet} {
        &:hover {
            overflow-x: scroll;
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

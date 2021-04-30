import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Container = styled.article`
    width: 100%;
    padding: 3rem auto;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
`;
export const VideoContainer = styled.section`
    opacity: 0.6;
    z-index: -1;
`;
export const Video = styled.iframe`
    width: 100%;
    height: 400px;
    @media ${device.tablet} {
        height: 300px;
    }
`;

export const TextContainer = styled.section`
    display: flex;
    width: 65%;
    margin: 2rem auto 2rem;
    font-weight: bold;
    font-size: 1.4rem;
    justify-content: center;
`;
export const VideoTitle = styled.section`
    margin: 0 auto 3rem;
    font-size: 2rem;
    font-style: italic;
    @media ${device.tablet} {
        font-size: 1.4rem;
    }
`;

export const Text = styled.article`
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

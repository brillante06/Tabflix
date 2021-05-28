import styled from 'styled-components';
import { device } from '../../styles/theme';

interface checked {
    isChecked: boolean;
}
interface props {
    isShow: boolean;
}

export const Container = styled.article`
    width: 100%;
    padding: 3rem auto;
    margin-bottom: 4rem;
`;
export const VideoContainer = styled.section`
    position: relative;
`;
export const Video = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -3;
    position: absolute;
`;
export const Error = styled.section`
    display: flex;
    height: 400px;
    @media ${device.tablet} {
        height: 300px;
    }
`;
export const ErrorText = styled.article`
    margin: 2rem auto 1rem;
    font-size: 3rem;
    @media ${device.tablet} {
        font-size: 2rem;
    }
    @media ${device.mobile} {
        font-size: 1rem;
    }
`;
export const OverView = styled.section<props>`
    ${(props) => (props.isShow ? '' : 'opacity:0;')}
    max-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TextContainer = styled.section`
    display: flex;
    width: 65%;
    margin: 2rem auto 2rem;
    font-weight: bold;
    font-size: 1.4rem;
    justify-content: center;
`;
export const VideoTitle = styled.section<props>`
    margin: 0 auto 3rem;
    ${(props) => (props.isShow ? '' : 'transform-origin: 0 0;')}
    ${(props) => (props.isShow ? '' : 'transform: scale(1.5);')}
    transition: 0.6s ease;
    font-size: 1.9rem;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;
    max-height: 12rem;
    overflow: hidden;
    @media ${device.tablet} {
        font-size: 1.3rem;
    }
    @media ${device.mobile} {
        font-size: 1.1rem;
    }
`;
export const Introduce = styled.article`
    font-size: 1rem;
    width: 31%;
    margin-bottom: -15rem;
    margin-top: 2rem;
    z-index: 16;
    position: absolute;
    color: white;
`;

export const Text = styled.article<checked>`
    cursor: pointer;
    &:hover {
        color: red;
    }
    ${(props) => (props.isChecked ? 'color:tomato' : 'color:black')}
`;

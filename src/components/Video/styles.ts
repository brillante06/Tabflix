import styled from 'styled-components';
import { device } from '../../styles/theme';

interface props {
    isShow: boolean;
}
export const OverView = styled.section<props>`
    ${(props) => (props.isShow ? '' : 'opacity:0;')}
    max-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 2s;
`;
export const VideoTitle = styled.section<props>`
    margin: 0 auto 3rem;
    ${(props) => (props.isShow ? '' : 'transform-origin: 0 0;')}
    ${(props) => (props.isShow ? '' : 'transform: scale(1.8);')}
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

export const Introduce = styled.article`
    font-size: 1rem;
    width: 31%;
    margin: 2rem 0 -15rem 1rem;
    z-index: 16;
    position: absolute;
    color: white;
`;

export const VideoContainer = styled.section`
    position: relative;
`;
export const Video = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -3;
    @media ${device.tablet} {
        z-index: 1;
    }
    position: absolute;
`;

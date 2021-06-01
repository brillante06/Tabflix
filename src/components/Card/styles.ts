import styled from 'styled-components';
import { device } from '../../styles/theme';

export const MovieTitle = styled.p`
    font-size: 1.2rem;
    @media ${device.tablet} {
        font-size: 1rem;
    }
    text-overflow: ellipsis;
    margin: 0.6rem 0 1rem 0;
    overflow: hidden;
    height: 2.7rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.3rem;
    @media ${device.tablet} {
        line-height: 1rem;
        height: 2rem;
    }
`;
export const MovieYear = styled.div`
    font-size: 1.2rem;
    @media ${device.tablet} {
        font-size: 1rem;
    }
`;
export const MovieRating = styled.p`
    font-size: 1.2rem;
    @media ${device.tablet} {
        font-size: 1rem;
    }
    margin: 0 0.8rem 1rem 0;
`;
export const Container = styled.li`
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    max-width: 23rem;
    background-color: white;
    margin-right: 0.1rem;
    flex: 0 0 calc(100% / 5);
    @media screen and (max-width: 1400px) {
        flex: 0 0 calc(100% / 4);
    }
    @media ${device.tablet} {
        flex: 0 0 calc(100% / 3);
    }
    list-style: none;
`;
export const InfoContainer = styled.article`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 0.6rem;
`;
export const Info = styled.section`
    display: flex;
    justify-content: space-evenly;
`;
export const ImgWrapper = styled.section`
    width: 100%;
    max-width: 20rem;
    overflow: hidden;
`;

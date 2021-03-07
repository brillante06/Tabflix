import styled from 'styled-components';

interface image {
    src: string;
    alt?: string;
}
export const movieImage = styled.img<image>`
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
    width: 100%;
    height: 50vh;
    border-radius: 1rem;
`;
export const movieInfo = styled.p`
    font-size: 0.8rem;
    padding: -1rem 0 0 4rem;
    margin: 0.6rem 0 1rem 0.8rem;
`;
export const movieRating = styled.p`
    font-size: 0.8rem;
    padding: -1rem 0 0 4rem;
    margin: 0.4rem 0.8rem 1rem 0;
`;
export const Container = styled.article`
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
export const InfoContainer = styled.article`
    display: flex;
    justify-content: space-between;
`;

import styled from 'styled-components';

interface image {
    src: string;
    alt: string;
}
export const movieImage = styled.img<image>`
    width: 100%;
    height: 7rem;
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`;
export const movieTitle = styled.p`
    text-align: center;
    font-size: 0.9rem;
    padding: -1rem;
`;
export const Container = styled.article`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;

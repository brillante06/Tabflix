import styled from 'styled-components';

interface image {
    src: string;
    alt: string;
}
export const movieImage = styled.img<image>`
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`;
export const movieTitle = styled.p`
    text-align: end;
`;
export const Container = styled.article`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    ${movieImage} {
        height: 7rem;
        width: 100%;
    }
`;

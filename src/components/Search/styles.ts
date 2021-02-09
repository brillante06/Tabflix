import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    padding-bottom: 2rem;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px;
    display: block;
    margin: 0 0 1rem;
`;
export const movieList = styled.section`
    width: 100%;
`;
export const movieName = styled.article`
    width: 80%;
    height: 1rem;
    &:hover {
        background-color: gray;
    }
`;

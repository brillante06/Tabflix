import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    padding-bottom: 2rem;
`;

export const Input = styled.input`
    width: 95%;
    font-size: 2rem;
    border: 1px;
    display: block;
    margin: 0 auto 2rem;
    border-radius: 2rem;
    border: 1px solid;
    &:focus {
        outline: none;
    }
`;
export const movieList = styled.section`
    width: 95%;
    height: 30rem;
    margin: auto;
    overflow: hidden;
    &:hover {
        overflow-y: scroll;
    }
    &::-webkit-scrollbar {
        width: 0.6rem;
        height: 1px;
        border-radius: 3px;
        background-color: gainsboro;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 1px;
    }
`;
export const movieName = styled.article`
    width: 80%;
    font-size: 2.1rem;
    &:hover {
        background-color: #dee1e5;
    }
    border-radius: 0.3rem;
    margin: 0 0 0.5rem 1rem;
`;

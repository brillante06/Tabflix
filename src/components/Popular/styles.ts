import styled from 'styled-components';

export const Container = styled.article`
    width: 100%;
    padding: 3rem auto;
    margin-bottom: 4rem;
`;

export const TextContainer = styled.section`
    display: flex;
    width: 30%;
    margin-left: 10rem;
    font-weight: bold;
`;

export const Text = styled.article`
    font-size: 1.4rem;
`;
export const TextButton = styled.button`
    font-size: 1.4rem;
    &:hover {
        font-size: 2rem;
    }
`;

import styled from 'styled-components';

interface Props {
    videoURL: string;
}

export const Container = styled.article`
    width: 100%;
    padding: 3rem auto;
    margin-bottom: 4rem;
`;

export const TextContainer = styled.section`
    display: flex;
    width: 65%;
    margin: 2rem auto 2rem;
    font-weight: bold;
    font-size: 1.4rem;
    justify-content: center;
`;

export const Text = styled.article`
    cursor: pointer;
`;

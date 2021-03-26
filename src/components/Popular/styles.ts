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
    width: 30%;
    margin-left: 10rem;
    font-weight: bold;
    font-size: 1.4rem;
`;

export const Text = styled.article`
    cursor: pointer;
`;

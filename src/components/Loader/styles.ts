import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding-bottom: 2rem;
`;
export const loader = styled.article`
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 5rem auto 1rem;
    content: ' ';
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

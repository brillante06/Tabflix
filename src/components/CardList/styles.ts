import styled from 'styled-components';

export const Container = styled.article`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, auto));
    grid-gap: 1rem;
    align-items: stretch;
    margin: auto;
`;

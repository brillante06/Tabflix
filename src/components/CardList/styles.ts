import styled from 'styled-components';

export const Container = styled.article`
    width: 95%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 1rem;
    align-items: stretch;
    margin: auto;
`;

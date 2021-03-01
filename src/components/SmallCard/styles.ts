import styled from 'styled-components';

interface props {
    tag: string;
}
export const Container = styled.article<props>`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 0 1rem 2rem 1rem;
`;

export const Image = styled.img<props>`
    width: ${(props) => (props.tag === 'similar' ? '12.5vw' : '10vw')};
`;

export const Name = styled.p`
    text-align: center;
    font-size: 0.3rem;
`;

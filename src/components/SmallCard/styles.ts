import styled from 'styled-components';
import { device } from '../../styles/theme';

interface props {
    tag: string;
}
export const Container = styled.li`
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    max-width: 23rem;
    background-color: white;
    margin-right: 1rem;
    flex: 0 0 calc(100% / 5);
    @media screen and (max-width: 1400px) {
        flex: 0 0 calc(100% / 4);
    }
    @media ${device.tablet} {
        flex: 0 0 calc(100% / 3);
    }
    list-style: none;
`;
export const ImgWrapper = styled.section`
    width: 100%;
    max-width: 20rem;
    overflow: hidden;
`;
export const Name = styled.p`
    text-align: center;
    font-size: 1.3rem;
    @media ${device.tablet} {
        font-size: 1rem;
    }
`;
export const Character = styled.p<props>`
    text-align: center;
    font-size: 1rem;
    @media ${device.tablet} {
        font-size: 0.8rem;
    }
    font-weight: ${(props) => (props.tag === 'similar' ? '' : 'bolder')};
`;

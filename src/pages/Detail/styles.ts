import styled from 'styled-components';
import { device } from '../../styles/theme';

interface posterImage {
    poster: string;
}
interface overflow {
    isOverflow?: boolean;
}
interface genreColor {
    bgColor: string;
}
export const Container = styled.main`
    width: 100%;
    padding-bottom: 2rem;
    display: flex;
    margin: auto;
    flex-direction: column;
    z-index: -1;
    @media ${device.tablet} {
        z-index: 1;
    }
`;
export const Items = styled.section``;

export const Background = styled.section<posterImage>`
    width: 100%;
    height: 30rem;
    background: url(${(props) => props.poster}) no-repeat center;
    background-size: cover;
    @media ${device.tablet} {
        height: 27rem;
    }
    @media ${device.mobile} {
        height: 19rem;
    }
`;
export const TextContainer = styled.article`
    width: 80%;
    margin: 1rem auto 1rem;
    font-size: 2.4rem;
    @media ${device.tablet} {
        font-size: 1.7rem;
    }
`;
export const ListContainer = styled.ul<overflow>`
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-end;
    overflow: hidden;
    width: 80%;
    margin: 0 auto 0;
    padding: 2rem 0 2rem;
    &:hover {
        ${(props) => (props.isOverflow === true ? 'overflow-x:scroll' : 'overflow-x:hidden')}
    }
    &::-webkit-scrollbar {
        width: 0.6rem;
        height: 10px;
        border-radius: 2rem;
        background-color: gainsboro;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 1px;
    }
`;
export const Info = styled.article`
    font-size: 1rem;
`;
export const Text = styled.section`
    font-size: 1.3rem;
`;
export const IntroduceContainer = styled.section`
    width: 80%;
    height: 32rem;
    display: flex;
    border-radius: 1rem;
    margin: -10rem auto 3rem;
    @media ${device.tablet} {
        width: 100%;
        height: 40rem;
        margin: -10rem auto 12rem;
        flex-direction: column;
        align-items: center;
    }
`;
export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 13rem 0 0 2rem;
    width: 100%;
    @media ${device.tablet} {
        margin: 2rem 0 1rem;
        align-items: center;
    }
`;
export const GenreContainer = styled.section`
    display: flex;
`;
export const Genre = styled.article<genreColor>`
    border: 1rem;
    border-radius: 3px;
    background-color: ${(props) => props.bgColor};
    color: white;
    font-size: 1.5rem;
    margin: 8px 8px 8px 0;
`;
export const InfoColumn = styled.section`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.article`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
`;
export const ErrorMessage = styled.article`
    margin: 2rem 0 2rem;
    font-size: 1.5rem;
`;

export const Poster = styled.img`
    width: 20rem;
    height: 30rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    margin-top: 1rem;
`;

export const Description = styled.section`
    font-size: 1.2rem;
    width: 80%;
    margin: 0 auto 3rem;
    @media ${device.tablet} {
        font-size: 1rem;
        margin: 0 auto 3rem;
    }
`;

export const Tagline = styled.article`
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0.1rem 0 1rem;
    @media ${device.tablet} {
        font-size: 1.8rem;
    }
    @media ${device.mobile} {
        font-size: 1.2rem;
    }
`;
export const Distinct = styled.div`
    border: 1px solid #c1c1c1;
    width: 95%;
    margin: 2rem 0.3rem 0.8rem;
`;

ListContainer.defaultProps = { isOverflow: true };

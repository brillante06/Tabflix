import styled from 'styled-components';

interface image {
    logoImg: string;
}
interface posterImage {
    poster: string;
}
export const Container = styled.main<posterImage>`
    width: 100%;
    padding-bottom: 2rem;
    display: flex;
    margin: auto;
    flex-direction: column;
    z-index: -1;
    background: (${(props) => props.poster}) no-repeat center;
`;

export const Background = styled.section<posterImage>`
    width: 100%;
    height: 30rem;
    background: url(${(props) => props.poster}) no-repeat center;
    background-size: cover;
`;

export const ListContainer = styled.section`
    display: flex;
    align-content: flex-end;
    overflow: hidden;
    width: 70%;
    margin: 0 auto 0;
    &:hover {
        overflow-x: scroll;
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

export const IntroduceContainer = styled.section`
    width: 70%;
    height: 32rem;
    display: flex;
    border-radius: 1rem;
    margin: -10rem auto 3rem;
`;
export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10rem 0 0 2rem;
    width: 100%;
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

export const Poster = styled.img`
    width: 20rem;
    height: 30rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    margin-top: 1rem;
`;

export const Description = styled.section`
    font-size: 1.2rem;
    width: 70%;
    margin: 0 auto 3rem;
`;

export const Info = styled.article`
    font-size: 1.5rem;
    margin: 1rem 8rem 0 0;
    text-overflow: ellipsis;
    overflow: hidden;
`;
export const Tagline = styled.article`
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0.1rem 0 1rem;
`;
export const Distinct = styled.div`
    border: 1px solid #c1c1c1;
    width: 95%;
    margin: 2rem 0.3rem 0.8rem;
`;

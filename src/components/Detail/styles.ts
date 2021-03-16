import styled from 'styled-components';

interface image {
    logoImg: string;
}
interface posterImage {
    poster: string;
}
export const Container = styled.main<posterImage>`
    width: 85%;
    padding-bottom: 2rem;
    display: flex;
    margin: auto;
    flex-direction: column;
    &::after {
        content: '';
        width: 85%;
        opacity: 0.5;
        background-size: cover;
        z-index: -1;
        background: url(${(props) => props.poster});
        position: relative;
        top: 0;
        left: 0;
    }
`;

export const Background = styled.section<image>`
    width: 100%;
    height: 10rem;
    background-image: url(${(props) => props.logoImg});
    background-repeat: no-repeat;
    background-size: 100% 150%;
`;

export const ListContainer = styled.section`
    display: flex;
    align-content: flex-end;
    overflow: hidden;
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
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 3rem;
`;
export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 2rem;
    width: 100%;
`;
export const InfoColumn = styled.section`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.article`
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 3rem;
`;

export const Poster = styled.img`
    width: 20vw;
    height: 30vw;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
`;

export const Description = styled.section`
    font-size: 1.7rem;
`;

export const Info = styled.article`
    font-size: 1.5rem;
    margin: 1rem 8rem 1.1rem 0;
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

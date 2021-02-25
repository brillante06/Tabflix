import styled from 'styled-components';

interface image {
    logoImg: string;
}
export const Container = styled.main`
    width: 95%;
    padding-bottom: 2rem;
    display: flex;
    margin: auto;
    flex-direction: column;
`;

export const Background = styled.section<image>`
    width: 100%;
    height: 10rem;
    background-image: url(${(props) => props.logoImg});
    background-repeat: no-repeat;
    background-size: 100% 150%;
`;
export const Similar = styled.article`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 0 1rem 2rem 1rem;
`;
export const SimilarImage = styled.img`
    width: 12.5vw;
`;

export const SimilarTitle = styled.p`
    font-size: 0.3rem;
`;
export const SimilarContainer = styled.section`
    display: flex;
    align-content: flex-end;
    &:hover {
        overflow-x: scroll;
        overflow-y: hidden;
    }
    &::-webkit-scrollbar {
        width: 0.6rem;
        height: 7px;
        border-radius: 5px;
        background-color: gainsboro;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }
`;
export const ListContainer = styled.section`
    display: flex;
    align-content: flex-end;
    overflow-x: scroll;
`;
export const ActorImage = styled.img`
    width: 10vw;
`;
export const ActorName = styled.div`
    font-size: 0.3rem;
    margin: auto;
`;
export const Actor = styled.section`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 0 1rem 0 1rem;
`;
export const IntroduceContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`;
export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 2rem;
`;
export const Title = styled.article`
    font-size: 20px;
    font-weight: bold;
`;

export const Poster = styled.img`
    width: 20vw;
    height: 30vw;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const Description = styled.section`
    font-size: 12px;
`;
export const Genre = styled.article`
    width: 1rem;
`;

export const RunningTime = styled.article`
    font-size: 20px;
    margin: 1rem 0 1.1rem;
`;
export const Tagline = styled.article`
    font-size: 20px;
    font-weight: bold;
    margin: 0.1rem 0 0.1rem;
`;
export const Distinct = styled.div`
    border: 1px solid #c1c1c1;
    width: 95%;
    margin: 2rem 0.3rem 0.8rem;
`;

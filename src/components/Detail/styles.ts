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
    margin: 0 1rem 0 1rem;
`;
export const SimilarImage = styled.img`
    width: 15vw;
`;

export const SimilarTitle = styled.p`
    width: 2rem;
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
    align-content: space-between;
`;
export const Title = styled.article`
    font-size: 20px;
    margin: auto;
`;

export const Poster = styled.img`
    width: 20vw;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const Description = styled.section`
    font-size: 12px;
    margin: 0.5rem 2rem 0.5rem;
`;
export const Genre = styled.article`
    width: 1rem;
`;

export const RunningTime = styled.article`
    font-size: 20px;
    margin: 0.5rem auto 0.6rem;
`;

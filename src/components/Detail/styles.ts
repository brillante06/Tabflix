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

export const ListContainer = styled.section`
    display: flex;
    align-content: flex-end;
    overflow-x: scroll;
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

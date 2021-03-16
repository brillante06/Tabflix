import styled from 'styled-components';

interface isRight {
    rightIndex?: string;
}
export const Container = styled.article`
    position: relative;
    margin: 0 auto 5rem;
    max-height: 30rem;
    overflow: hidden;
`;

export const Slide = styled.section`
    display: none;
`;

export const slideContainer = styled.div`
    width: 100%;
    display: flex;
`;
export const Arrow = styled.button<isRight>`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    user-select: none;
    transition: 0.6s ease;
    right: ${(props) => props.rightIndex};
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

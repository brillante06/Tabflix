import React, { FC } from 'react';
import styled from 'styled-components';

interface RatioProps {
    ratio: number;
    children?: React.ReactNode;
}
const OuterWrapper = styled.section<{ ratio: number }>`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: ${(props) => (1 / props.ratio) * 100}%;
`;
const InnerWrapper = styled.article`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
const AspectRatio: FC<RatioProps> = ({ ratio, children }) => (
    <OuterWrapper ratio={ratio}>
        <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
);
export default AspectRatio;

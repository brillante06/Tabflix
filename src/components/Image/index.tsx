import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import lazyImage from '../../assets/lazyImage.jpg';
import noImage from '../../assets/noImage.jpg';
import { useIntersecting } from '../../hooks/useIntersecting';

type Props = {
    src: string | undefined;
    alt: string;
    ref?: React.Ref<HTMLImageElement>;
    tag?: boolean;
    width?: string;
    height?: string;
};
const Img = styled.img<Props>`
    src: ${(props) => props.src};
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
`;

const Image: React.ForwardRefExoticComponent<Props> = forwardRef(
    ({ src, alt, tag, width = '100%', height = '100%' }, ref) => {
        const lazyRef = useRef<HTMLImageElement | null>(null);
        const lazyLoading: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyimage = entry.target as HTMLImageElement;
                    observer.unobserve(entry.target);
                    if (lazyimage.dataset.src) lazyimage.src = lazyimage.dataset.src;
                }
            });
        };
        useIntersecting(lazyRef, lazyLoading);
        return (
            <Img
                src={tag ? lazyImage : src}
                alt={alt}
                ref={tag ? lazyRef : null}
                data-src={src !== null ? src : noImage}
                height={height}
                width={width}
            />
        );
    }
);
Image.displayName = 'Image';

export default Image;

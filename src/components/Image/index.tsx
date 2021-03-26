import React, { forwardRef, useRef } from 'react';
import lazyImage from '../../assets/lazyImage.jpg';
import noImage from '../../assets/noImage.jpg';
import { useIntersecting } from '../../hooks/useIntersecting';

type Props = {
    width?: string;
    height?: string;
    src: string | null;
    alt: string;
    ref?: React.Ref<HTMLImageElement>;
};

const Image: React.ForwardRefExoticComponent<Props> = forwardRef(
    ({ width, height, src, alt }, ref) => {
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
            <img
                src={lazyImage}
                alt={alt}
                width={width}
                height={height}
                ref={lazyRef}
                data-src={src !== null ? src : noImage}
            />
        );
    }
);
Image.displayName = 'Image';

export default Image;

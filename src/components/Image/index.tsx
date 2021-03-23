import React, { forwardRef } from 'react';
import lazyImage from '../../assets/lazyImage.jpg';
import noImage from '../../assets/noImage.jpg';

type Props = {
    width?: string;
    height?: string;
    src: string | null;
    alt: string;
    ref?: React.Ref<HTMLImageElement>;
    tag?: string;
};

const Image: React.ForwardRefExoticComponent<Props> = forwardRef(
    ({ width, height, src, alt, tag = null }, ref) => (
        <img
            src={lazyImage}
            alt={alt}
            width={width}
            height={height}
            ref={ref}
            data-src={src !== null ? src : noImage}
        />
    )
);
Image.displayName = 'Image';

export default Image;

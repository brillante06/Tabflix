import React, { forwardRef } from 'react';
import lazyImage from '../../assets/lazyImage.jpg';
import noImage from '../../assets/noImage.jpg';

type Props = {
    width?: string;
    height?: string;
    src: string | null;
    alt: string;
    lazyRef?: React.Ref<HTMLImageElement>;
    tag?: string;
};

const Image: React.ForwardRefExoticComponent<Props> = forwardRef(
    ({ width, height, src, alt, lazyRef, tag = null }) => (
        <img
            src={lazyImage}
            alt={alt}
            width={width}
            height={height}
            ref={lazyRef}
            data-src={src !== null ? src : noImage}
        />
    )
);
Image.displayName = 'Image';

export default Image;

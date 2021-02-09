import React, { useEffect } from 'react';

export const useIntersecting = (
    loadingRef: React.RefObject<HTMLDivElement>,
    onIntersect: IntersectionObserverCallback
) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    };

    useEffect(() => {
        const io = new IntersectionObserver(onIntersect, options);
        /* eslint-disable no-console */
        console.log(loadingRef.current);
        /* eslint-disable no-console */
        if (loadingRef.current) {
            io.observe(loadingRef.current);
        }
        return () => {
            if (loadingRef.current) {
                io.unobserve(loadingRef.current);
            }
        };
    }, [loadingRef]);
};

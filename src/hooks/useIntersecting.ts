import React, { useEffect } from 'react';

export const useIntersecting = (
    loadingRef: React.RefObject<HTMLDivElement>,
    onIntersect: IntersectionObserverCallback
) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
    };

    useEffect(() => {
        const io = new IntersectionObserver(onIntersect, options);

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

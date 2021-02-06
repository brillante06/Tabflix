import React, { useEffect } from 'react';

export const useIntersecting = (
    size: number,
    setSize: (n: number) => Promise<any[] | undefined>,
    loadingRef: React.RefObject<HTMLDivElement>
) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
    };

    useEffect(() => {
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setSize(size + 1);
            }
        }, options);
        if (loadingRef.current) {
            io.observe(loadingRef.current);
        }
        return () => {
            io.disconnect();
        };
    }, [loadingRef]);
};

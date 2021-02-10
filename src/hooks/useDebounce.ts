import React, { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const deb = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(deb);
        };
    }, [delay, value]);
    return debounceValue;
};

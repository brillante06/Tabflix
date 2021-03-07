import React, { useEffect, useState } from 'react';
import { Dark, Light, Theme } from '../styles/theme';

export const useDarkMode = () => {
    const [theme, setTheme] = useState<Theme>(Light);

    const setMode = (mode: Theme) =>
        mode === Light
            ? (window.localStorage.setItem('theme', 'light'), setTheme(mode))
            : (window.localStorage.setItem('theme', 'dark'), setTheme(mode));

    const toggleTheme = () => (theme === Light ? setMode(Dark) : setMode(Light));

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme !== null) {
            if (localTheme === 'dark') {
                setTheme(Dark);
            } else {
                setTheme(Light);
            }
        }
    }, []);

    return { theme, toggleTheme };
};

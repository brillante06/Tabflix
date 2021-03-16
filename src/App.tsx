import React, { createContext, Fragment } from 'react';
import Routes from './components/Routes';
import { useDarkMode } from './hooks/useDarkMode';
import Global from './styles/global';
import { Dark, Light, Theme } from './styles/theme';

interface contextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<contextProps>({
    theme: Light,
    toggleTheme: () => null,
});
const App: React.FC = () => {
    const { theme, toggleTheme } = useDarkMode();
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Fragment>
                <Global theme={theme === Light ? Light : Dark} />
                <Routes />
            </Fragment>
        </ThemeContext.Provider>
    );
};

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './components/Routes';
import Global from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <Global />
        <Routes />
    </ThemeProvider>
);

export default App;

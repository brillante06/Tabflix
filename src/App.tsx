import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import Routes from './components/Routes';
import Global from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => (
    <RecoilRoot>
        <ThemeProvider theme={theme}>
            <Global />
            <Routes />
        </ThemeProvider>
    </RecoilRoot>
);

export default App;

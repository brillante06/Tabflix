import React, { Fragment } from 'react';
import Routes from './components/Routes';
import Global from './styles/global';

const App: React.FC = () => (
    <Fragment>
        <Global />
        <Routes />
    </Fragment>
);

export default App;

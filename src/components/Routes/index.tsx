import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Main from '../../pages/main';

const Routes: React.FC = () => (
    <Router>
        <Route exact path="/" component={Main}></Route>
    </Router>
);

export default Routes;

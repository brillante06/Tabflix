import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Main from '../../pages/main';
import Search from '../Search';

const Routes: React.FC = () => (
    <Router>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/search" component={Search}></Route>
    </Router>
);

export default Routes;

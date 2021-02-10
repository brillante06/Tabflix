import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Main from '../../pages/main';
import Search from '../Search';
import { Header } from '..';

const Routes: React.FC = () => (
    <Router>
        <Header />
        <main>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/search" component={Search}></Route>
        </main>
    </Router>
);

export default Routes;

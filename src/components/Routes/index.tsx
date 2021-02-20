import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React from 'react';
import Main from '../../pages/main';
import Search from '../Search';
import { Header } from '..';
import Detail from '../Detail';

const Routes: React.FC = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Header />
            <main>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
            </main>
        </Router>
    );
};

export default Routes;

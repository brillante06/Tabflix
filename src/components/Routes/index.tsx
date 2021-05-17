import { Route, Router, Switch } from 'react-router-dom';
import React from 'react';
import Main from '../../pages/Main';
import { Detail, Header, Search } from '../index';
import { browserHistory } from '../../utils/constants';

const Routes: React.FC = () => (
    <Router history={browserHistory}>
        <main>
            <Header />
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route exact path="/detail/:id" component={Detail}></Route>
            </Switch>
        </main>
    </Router>
);

export default Routes;

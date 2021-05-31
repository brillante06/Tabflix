import { Route, Router, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import { About, Header, Loader, Search } from '../index';
import { browserHistory } from '../../utils/constants';
import { Detail, Main } from '../../pages';
import ErrorBoundary from '../ErrorBoundary';

const Routes: React.FC = () => (
    <Router history={browserHistory}>
        <main>
            <Header />
            <ErrorBoundary>
                <Switch>
                    <Suspense fallback={<Loader />}>
                        <Route exact path="/" component={Main}></Route>
                    </Suspense>
                    <Route exact path="/search" component={Search}></Route>
                    <Route exact path="/detail/:id" component={Detail}></Route>
                    <Route exact path="/about" component={About}></Route>
                </Switch>
            </ErrorBoundary>
        </main>
    </Router>
);

export default Routes;

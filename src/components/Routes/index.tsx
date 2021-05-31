import { Route, Router, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Header, Loader } from '../index';
import { browserHistory } from '../../utils/constants';

import ErrorBoundary from '../ErrorBoundary';

const Main = React.lazy(() => import('../../pages/Main'));
const Detail = React.lazy(() => import('../../pages/Detail'));
const Search = React.lazy(() => import('../../components/Search'));
const About = React.lazy(() => import('../../components/About'));

const Routes: React.FC = () => (
    <Router history={browserHistory}>
        <main>
            <Header />
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route exact path="/search" component={Search}></Route>
                        <Route exact path="/detail/:id" component={Detail}></Route>
                        <Route exact path="/about" component={About}></Route>
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </main>
    </Router>
);

export default Routes;

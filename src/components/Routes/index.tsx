import { Route, Router, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Header, Loader } from '../index';
import { browserHistory } from '../../utils/constants';

const Routes: React.FC = () => {
    const Main = lazy(() => import('../../pages/Main'));
    const Detail = lazy(() => import('../../pages/Detail'));
    const Search = lazy(() => import('../Search'));
    return (
        <Router history={browserHistory}>
            <Suspense fallback={<Loader />}>
                <main>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route exact path="/search" component={Search}></Route>
                        <Route exact path="/detail/:id" component={Detail}></Route>
                    </Switch>
                </main>
            </Suspense>
        </Router>
    );
};

export default Routes;

import React from 'react';
import { render, fireEvent, waitFor, getByText } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Detail from '../index';
import { history } from 'history';
import movieDetailDummy from '../../../dummy/movieDummy';
import { createMemoryHistory } from 'history';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { get } from 'lodash';

jest.mock('../../../utils/request');

const server = setupServer(
    rest.get('/detail/343611', (req, res, ctx) => {
        return res.ctx.json(movieDetailDummy);
    })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderComponenet = ({ movieID }) =>
    render(
        <MemoryRouter initialEntries={[`/detail/${movieID}`]}>
            <Route path="/detail/:id">
                <Detail />
            </Route>
        </MemoryRouter>
    );

describe('<Detail />', () => {
    it('check match.param', async () => {
        const { getByText } = renderComponenet({ movieID: 343611 });
        await waitFor(() => getByText('343611'));
    });
});

import React from 'react';
import { render, fireEvent, waitFor, getByText, getByTestId } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Detail from '../index';
import movieDetailDummy from '../../../dummy/movieDummy';
import { Route, MemoryRouter } from 'react-router-dom';

jest.mock('../../../utils/request');

const server = setupServer(
    rest.get('/detail/343611', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(movieDetailDummy));
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
    it('get movieDetail from tmdb', async () => {
        server.use(
            rest.get('/detail', (req, res, ctx) => {
                return res.once(ctx.status(200), ctx.json(movieDetailDummy));
            })
        );
        const { getByTestId } = await renderComponenet({ movieID: 343611 });
        await waitFor(() => getByTestId('Jack Reacher: Never Go Back"'));
    });
    it('check param from parent component', async () => {
        const { getByText } = renderComponenet({ movieID: 343611 });
        await waitFor(() => getByText('343611'));
    });
});

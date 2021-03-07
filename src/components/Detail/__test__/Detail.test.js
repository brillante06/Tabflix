import React from 'react';
import { render, fireEvent, waitFor, getByText, getByTestId } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Detail from '../index';
import movieDetailDummy from '../../../dummy/movieDummy';
import { Route, MemoryRouter } from 'react-router-dom';
import { API_KEY } from '../../../utils/constants';

const renderComponenet = ({ movieID }) =>
    render(
        <MemoryRouter initialEntries={[`/detail/${movieID}`]}>
            <Route path="/detail/:id">
                <Detail />
            </Route>
        </MemoryRouter>
    );

const server = setupServer(
    rest.get(`https://api.themoviedb.org/3/movie/343611${API_KEY}`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(movieDetailDummy));
    })
);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('<Detail />', () => {
    test('get movieDetail from tmdb', async () => {
        const utils = await render(<Detail />);
        await waitFor(() => expect(utils.getByText('잭')));
    });
});

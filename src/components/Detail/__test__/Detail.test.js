import React from 'react';
import { render, fireEvent, waitFor, getByText, getByTestId } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Detail from '../index';
import movieDetailDummy from '../../../dummy/movieDummy';
import { Route, MemoryRouter } from 'react-router-dom';
import { API_KEY } from '../../../utils/constants';

jest.mock('../../../utils/request');

const server = setupServer(
    rest.get(
        `https://api.themoviedb.org/3/movie/343611?api_key=${API_KEY}&language=en-US`,
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(movieDetailDummy));
        }
    )
);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

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
        const utils = render(<Detail />);
        expect(utils.getByText('undefined')).toBeInTheDocument();
        await waitFor(() => {
            expect(utils.getByText(/Jack Reacher: Never Go Back/i)).toBeInTheDocument();
            expect(utils.getByText(/Jack Reacher: Never Go Back/i)).toBeInTheDocument();
        });
    });
});

import React from 'react';
import { fireEvent, render, setup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { movieSearchDummy } from '../../../dummy/movieDummy';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Search from '../index';

jest.mock('../../../utils/request');

const server = setupServer(
    rest.get(
        'https://api.themoviedb.org/3/search/movie?api_key=b39d6914b6588b1efd41706869226e0d&query=harry',
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(movieSearchDummy));
        }
    )
);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('<Search />', () => {
    it('has input and movie list container', () => {
        const utils = render(<Search />);
        utils.getByPlaceholderText('영화를 검색해보세요');
        utils.getByLabelText('movie-input');
        utils.getByTestId('movie-list');
    });
    it('input change correctly', async () => {
        const utils = render(<Search />);
        const input = utils.getByPlaceholderText('영화를 검색해보세요');
        fireEvent.change(input, { target: { value: 'harry' } });
        expect(input).toHaveAttribute('value', 'harry');
        await waitFor(() => {
            expect(utils.getByTestId('movie-title')).toHaveAttribute('Harry and the Hendersons');
        });
    });
});

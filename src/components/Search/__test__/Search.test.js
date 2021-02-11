import React from 'react';
import { fireEvent, render, setup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { dummyMovie, dummyImage } from '../../../dummy/movieDummy';
import { Search } from '../..';

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
    });
});

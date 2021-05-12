import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Card from '../index';
import { dummyMovie, dummyImage } from '../../../dummy/movieDummy';
import 'intersection-observer';
import { MemoryRouter, withRouter } from 'react-router';
import { createMemoryHistory } from '../../../utils/constants';

describe('<Card />', () => {
    it('matches snapshot', () => {
        const onClick = jest.fn();
        const utils = render(
            <Card
                image={dummyImage}
                title="soul"
                onClick={onClick}
                movie={dummyMovie}
                id={508442}
            />
        );
        expect(utils.container).toMatchSnapshot();
    });
    it('has rating,year and title', () => {
        const onClick = jest.fn();
        const utils = render(
            <Card
                title="soul"
                image={dummyImage}
                onClick={onClick}
                movie={dummyMovie}
                id={508442}
            />
        );
        utils.getByText('2020');
        utils.getByText('⭐8.3/10');
        utils.getByText('soul');
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', 'soul');
        expect(image).toHaveAttribute('src', dummyImage);
    });
});

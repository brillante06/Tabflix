import React from 'react';
import { fireEvent, getByTestId, getByText, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Card from '../index';
import { dummyMovie, dummyImage } from '../../../dummy/movieDummy';
import 'intersection-observer';
import { act } from 'react-dom/test-utils';
import { withRouter } from 'react-router-dom';

describe('<Card />', () => {
    const setup = () => {
        const onClick = jest.fn();
        const observe = jest.fn();
        const unobserve = jest.fn();
        window.IntersectionObserver = jest.fn(() => ({
            observe,
            unobserve,
        }));
        const utils = render(
            <Card
                title="soul"
                image={dummyImage}
                onClick={onClick}
                movie={dummyMovie}
                id={508442}
            />
        );
        return { utils, observe, unobserve };
    };

    // it('matches snapshot', () => {
    //     const { utils, observe } = setup();
    //     expect(observe).toHaveBeenCalled();
    //     expect(utils.container).toMatchSnapshot();
    // });
    it('get props correctly', async () => {
        const { utils } = setup();
        utils.getByText('2020');
        utils.getByText('soul');
        utils.getByText('⭐8.3/10');
        utils.getByAltText('soul');
        expect(utils.getByTestId('movie-image')).toHaveAttribute(
            'data-src',
            'https://image.tmdb.org/t/p/original/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg'
        );
    });
    it('can render to detail component', async () => {
        const observe = jest.fn();
        const unobserve = jest.fn();
        window.IntersectionObserver = jest.fn(() => ({
            observe,
            unobserve,
        }));
        const onClick = jest.fn();
        const utils = withRouter(
            render(
                <Card
                    title="soul"
                    image={dummyImage}
                    onClick={onClick}
                    movie={dummyMovie}
                    id={508442}
                />
            )
        );
        await act(async () => {
            const clickButton = utils.getByText('2020');
            fireEvent.click(clickButton);
            await waitFor(() => {
                const testID = getByTestId('running-time');
                testID.toHaveAttribute('data-testid', '101분');
            });
        });
    });
});

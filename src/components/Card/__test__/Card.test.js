import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Card from '../index';
import { dummyMovie, dummyImage } from '../../../dummy/movieDummy';
import { renderHook } from 'react-hooks-testing-library';
import userEvent from '@testing-library/user-event';
import { useIntersecting } from '../../../hooks/useIntersecting';

const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'test page', route);
    return render(ui, { wrapper: BrowserRouter });
};
jest.mock('../../../hooks/useIntersecting', () => {
    useIntersecting: (ref, cb) => null;
});
describe('<Card />', () => {
    it('matches snapshot', () => {
        const onClick = jest.fn();
        const utils = render(
            <Card
                title="soul"
                image={dummyImage}
                onClick={onClick}
                movie={dummyMovie}
                id={'508422'}
            />
        );
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props correctly', () => {
        const onClick = jest.fn();
        const utils = render(
            <Card
                title="soul"
                image={dummyImage}
                onClick={onClick}
                movie={dummyMovie}
                id={'508422'}
            />
        );
        utils.getByText('soul');
        const image = utils.getByAltText('soul');
        expect(image).toHaveAttribute('src', dummyImage);
    });
});

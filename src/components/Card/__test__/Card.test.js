import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Card from '../index';
import { dummyMovie, dummyImage } from '../../../dummy/movieDummy';
import 'intersection-observer';
import { MemoryRouter, Router, withRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import { create } from 'lodash';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
    it('move to detail page when click component', () => {
        const renderWithRouter = (
            ui,
            { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
        ) => {
            return {
                ...render(<Router history={history}>{ui}</Router>),
                history,
            };
        };
        const onClick = () => {
            history.push('/detail/508442');
        };

        const { getByText, history } = renderWithRouter(
            <Card
                title="soul"
                image={dummyImage}
                onClick={onClick}
                movie={dummyMovie}
                id={508442}
            />,
            { route: '/' }
        );

        const item = getByText('soul');
        fireEvent.click(item);
        expect(history.location.pathname).toBe('/detail/508442');
        screen.debug();
    });
});

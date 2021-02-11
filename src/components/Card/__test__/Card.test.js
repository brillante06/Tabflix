import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Card from '../index';
import { dummyMovie, dummyImage } from '../../../dummy/movieDummy';

describe('<Card />', () => {
    it('matches snapshot', () => {
        const onClick = jest.fn();
        const utils = render(
            <Card title="soul" image={dummyImage} onClick={onClick} movie={dummyMovie} />
        );
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props correctly', () => {
        const onClick = jest.fn();
        const utils = render(
            <Card title="soul" image={dummyImage} onClick={onClick} movie={dummyMovie} />
        );
        utils.getByText('soul');
        const image = utils.getByAltText('soul');
        expect(image).toHaveAttribute('src', dummyImage);
    });
});

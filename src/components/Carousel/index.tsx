import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { movieInfo } from '../../types';
import Card from '../Card';

import * as S from './styles';
import noImage from '../../assets/noImage.jpg';
import * as C from '../../utils/constants';
import CardList from '../CardList';

interface Props {
    movieArray: Array<movieInfo>;
}
const Carousel: React.FC<Props> = ({ movieArray }) => {
    const [index, setIndex] = useState(0);
    const history = useHistory();
    const slideRef = useRef<HTMLDivElement>(null);
    const TOTAL_SLIDES = 2;
    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transition = 'all 0.5s ease-in-out';
            slideRef.current.style.transform = `translateX(-${index}00%)`;
        }
    }, [index]);
    const moveNext = () => {
        if (index === TOTAL_SLIDES) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    const movePrev = () => {
        if (index === 0) {
            setIndex(TOTAL_SLIDES);
        } else {
            setIndex(index - 1);
        }
    };
    const onClick = (id: number) => {
        history.push(`/detail/${id}`);
    };
    return (
        <S.Container>
            <S.slideContainer ref={slideRef}>
                {movieArray.map((value: movieInfo, idx: number) => (
                    <Card
                        title={value.title}
                        onClick={onClick}
                        id={value.id}
                        key={idx}
                        image={
                            value.backdrop_path
                                ? `${C.IMAGE_URL_W500}/${value.poster_path}`
                                : noImage
                        }
                        movie={value}
                        tag={true}
                    ></Card>
                ))}
            </S.slideContainer>
            <S.Arrow onClick={moveNext} rightIndex={'0'}>
                &#10095;
            </S.Arrow>
            <S.Arrow onClick={movePrev}>&#10094;</S.Arrow>
        </S.Container>
    );
};

export default Carousel;

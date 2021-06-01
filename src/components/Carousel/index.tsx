import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { Card } from '..';
import { movieInfo } from '../../types';
import { fetcher } from '../../utils/request';
import * as S from './styles';
import * as C from '../../utils/constants';
import noImage from '../../assets/noImage.jpg';

interface Props {
    requestURL: string;
}
const Carousel: React.FC<Props> = ({ requestURL }) => {
    const [scrollAmount, setScrollAmount] = useState(0);
    const slideRef = useRef<HTMLUListElement>(null);

    const { data: movies } = useSWR<{ results: movieInfo[] }>(requestURL, fetcher, {
        suspense: true,
    });
    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    }, [scrollAmount]);

    const moveNext = () => {
        if (slideRef.current) {
            if (slideRef.current.scrollWidth < scrollAmount + slideRef.current.offsetWidth)
                setScrollAmount(0);
            else setScrollAmount(scrollAmount + slideRef.current.offsetWidth);
        }
    };
    const movePrev = () => {
        if (slideRef.current) {
            if (scrollAmount - slideRef.current.offsetWidth < 0)
                setScrollAmount(slideRef.current.scrollWidth);
            else setScrollAmount(scrollAmount - slideRef.current.offsetWidth);
        }
    };
    return (
        <S.Container>
            <S.SlideContainer ref={slideRef}>
                {movies?.results.map((value: movieInfo, idx) => (
                    <Card
                        title={value.title}
                        id={value.id}
                        key={idx}
                        image={
                            value.poster_path
                                ? `${C.IMAGE_URL_W500}${value.backdrop_path}`
                                : noImage
                        }
                        movie={value}
                        tag={true}
                    />
                ))}
            </S.SlideContainer>
            <S.Arrow onClick={moveNext} rightIndex={'0'}>
                &#10095;
            </S.Arrow>
            <S.Arrow onClick={movePrev}>&#10094;</S.Arrow>
        </S.Container>
    );
};

export default React.memo(Carousel);

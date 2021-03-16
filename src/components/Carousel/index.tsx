import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';

const Carousel: React.FC = () => {
    const [index, setIndex] = useState(0);
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
    return (
        <S.Container>
            {index}
            <S.slideContainer ref={slideRef}>
                <img
                    src="https://image.tmdb.org/t/p/original/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg"
                    style={{ width: '100%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg"
                    style={{ width: '100%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/original/mTRrGeLphIlj4JM7EauuEYpS3iv.jpg"
                    style={{ width: '100%' }}
                />
            </S.slideContainer>
            <S.Arrow onClick={moveNext} rightIndex={'0'}>
                &#10095;
            </S.Arrow>

            <S.Arrow onClick={movePrev}>&#10094;</S.Arrow>
        </S.Container>
    );
};

export default Carousel;

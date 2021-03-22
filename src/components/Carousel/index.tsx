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
                <div style={{ position: 'relative' }}>
                    <img
                        src="https://image.tmdb.org/t/p/w500/19fT7TrozEwtU3IWhewIOD8pseF.jpg"
                        style={{ width: '20%' }}
                    ></img>
                    <h3 style={{ position: 'absolute', top: '8px', color: 'yellow' }}>hello</h3>
                </div>
                <img
                    src="https://image.tmdb.org/t/p/w500/8Zqh8LSRzsiGx8qkYJQm9U8Ul04.jpg"
                    style={{ width: '20%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/w500/mTRrGeLphIlj4JM7EauuEYpS3iv.jpg"
                    style={{ width: '20%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/w500/zygmx5abXeDpr3fWYX4jlXFZ1wh.jpg"
                    style={{ width: '20%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/w500/uvcPUOu88Wws5ZtCy6mpFA8WztS.jpg"
                    style={{ width: '20%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/w500/19fT7TrozEwtU3IWhewIOD8pseF.jpg"
                    style={{ width: '20%' }}
                ></img>
                <img
                    src="https://image.tmdb.org/t/p/w500/8Zqh8LSRzsiGx8qkYJQm9U8Ul04.jpg"
                    style={{ width: '20%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/w500/mTRrGeLphIlj4JM7EauuEYpS3iv.jpg"
                    style={{ width: '20%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/w500/zygmx5abXeDpr3fWYX4jlXFZ1wh.jpg"
                    style={{ width: '20%' }}
                />
                <img
                    src="https://image.tmdb.org/t/p/w500/uvcPUOu88Wws5ZtCy6mpFA8WztS.jpg"
                    style={{ width: '20%' }}
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

import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';

interface Props {
    items: React.ReactNode;
}
const Carousel: React.FC<Props> = ({ items }) => {
    const [scrollAmount, setScrollAmount] = useState(0);
    const slideRef = useRef<HTMLUListElement>(null);
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
            <S.SlideContainer ref={slideRef}>{items}</S.SlideContainer>
            <S.Arrow onClick={moveNext} rightIndex={'0'}>
                &#10095;
            </S.Arrow>
            <S.Arrow onClick={movePrev}>&#10094;</S.Arrow>
        </S.Container>
    );
};

export default Carousel;

import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import ResizeObserver from 'resize-observer-polyfill';
import { movieInfo } from '../../types';
import { Card } from '../index';
import * as S from './styles';
import * as C from '../../utils/constants';
import noImage from '../../assets/noImage.jpg';

interface Props {
    movieArray: Array<movieInfo>;
}
const Carousel: React.FC<Props> = ({ movieArray }) => {
    const [scrollAmount, setScrollAmount] = useState(0);
    const [slideCount, setSlideCount] = useState(5);
    const itemRef = useRef<HTMLLIElement>(null);
    const history = useHistory();
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
    const calSlideCount = () => {
        if (window.innerWidth < 1400 && window.innerWidth > 855) {
            setSlideCount(4);
        } else if (window.innerWidth <= 855) {
            setSlideCount(3);
        }
    };
    useEffect(() => {
        if (slideRef.current) {
            const resizeObs = new ResizeObserver(calSlideCount);
            const cleanUp = () => {
                resizeObs.disconnect();
            };
            resizeObs.observe(slideRef.current);
            return cleanUp();
        }
        return undefined;
    }, []);
    const moveNext = () => {
        if (slideRef.current) {
            if (itemRef.current) {
                if (
                    slideRef.current.scrollWidth <
                    scrollAmount + itemRef.current.clientWidth * slideCount
                )
                    setScrollAmount(0);
                else setScrollAmount(scrollAmount + itemRef.current.clientWidth * slideCount);
            }
        }
    };
    const movePrev = () => {
        if (slideRef.current) {
            if (itemRef.current) {
                if (scrollAmount - itemRef.current.clientWidth * slideCount < 0)
                    setScrollAmount(slideRef.current.scrollWidth);
                else setScrollAmount(scrollAmount - itemRef.current.clientWidth * slideCount);
            }
        }
    };
    const onClick = (id: string) => {
        history.push(`/detail/${id}`);
    };
    return (
        <S.Container>
            <S.SlideContainer ref={slideRef}>
                {movieArray.map((value: movieInfo, idx: number) => (
                    <S.Item ref={itemRef} key={idx}>
                        <Card
                            title={value.title}
                            onClick={onClick}
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
                    </S.Item>
                ))}
            </S.SlideContainer>
            <S.Arrow onClick={moveNext} rightIndex={'0'}>
                &#10095;
            </S.Arrow>
            <S.Arrow onClick={movePrev}>&#10094;</S.Arrow>
        </S.Container>
    );
};

export default Carousel;

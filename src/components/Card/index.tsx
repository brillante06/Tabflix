import React, { FC, useRef } from 'react';
import { useIntersecting } from '../../hooks/useIntersecting';
import { movieInfo } from '../../types';
import * as S from './styles';
import lazyImage from '../../assets/lazyImage.jpg';
import noImage from '../../assets/noImage.jpg';

interface movieCard {
    image: string;
    title: string;
    onClick: (id: number) => void;
    id: number;
    movie?: movieInfo;
}

const Card: FC<movieCard> = ({ image, title, onClick, id, movie }) => {
    const onClickMove = () => {
        onClick(id);
    };

    const lazyRef = useRef<HTMLImageElement | null>(null);
    const lazyLoading: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyimage = entry.target as HTMLImageElement;
                observer.unobserve(entry.target);
                if (lazyimage.dataset.src) lazyimage.src = lazyimage.dataset.src;
            }
        });
    };
    useIntersecting(lazyRef, lazyLoading);
    return (
        <S.Container onClick={onClickMove}>
            <S.movieImage
                src={lazyImage}
                alt={title}
                ref={lazyRef}
                data-src={image !== null ? image : noImage}
            />
            <S.movieTitle>{title}</S.movieTitle>
        </S.Container>
    );
};

export default Card;

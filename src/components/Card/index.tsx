import React, { FC, useRef } from 'react';
import moment from 'moment';
import { useIntersecting } from '../../hooks/useIntersecting';
import { movieInfo } from '../../types';
import * as S from './styles';
import Image from '../Image';

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
            <Image src={image} alt={title} width={'100%'} height={'500vh'} ref={lazyRef} />
            <S.movieInfo>{title}</S.movieInfo>
            <S.InfoContainer>
                <S.movieInfo>{moment(movie?.release_date).year()}</S.movieInfo>
                <S.movieRating> ⭐{movie?.vote_average}/10</S.movieRating>
            </S.InfoContainer>
        </S.Container>
    );
};

export default Card;

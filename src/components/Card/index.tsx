import React, { FC, useRef } from 'react';
import moment from 'moment';
import { useIntersecting } from '../../hooks/useIntersecting';
import { movieInfo } from '../../types';
import * as S from './styles';
import { Image } from '../index';

interface movieCard {
    image: string;
    title: string;
    onClick: (id: string) => void;
    id: string;
    movie?: movieInfo;
    tag?: boolean;
}

const Card: FC<movieCard> = ({ image, title, onClick, id, movie, tag }) => {
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
            <Image
                src={image}
                alt={title}
                width={'100%'}
                ref={lazyRef}
                key={title}
                tag={tag}
                height={'65%'}
            />
            <S.MovieInfo>{title}</S.MovieInfo>
            <S.InfoContainer>
                <S.MovieInfo>{moment(movie?.release_date).year()}</S.MovieInfo>
                <S.MovieRating> ⭐{movie?.vote_average}/10</S.MovieRating>
            </S.InfoContainer>
        </S.Container>
    );
};

export default Card;

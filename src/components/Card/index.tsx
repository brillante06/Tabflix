import React, { FC, useRef } from 'react';
import moment from 'moment';
import { useIntersecting } from '../../hooks/useIntersecting';
import { movieInfo } from '../../types';
import * as S from './styles';
import { Image } from '../index';
import { AspectRatio } from '../AspectRatio';

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
            <S.ImgWrapper>
                <AspectRatio ratio={16 / 10}>
                    <Image src={image} alt={title} ref={lazyRef} key={title} tag={tag} />
                </AspectRatio>
            </S.ImgWrapper>
            <S.InfoContainer>
                <S.MovieTitle>{title}</S.MovieTitle>
                <S.Info>
                    <S.MovieYear>{moment(movie?.release_date).year()}</S.MovieYear>
                    <S.MovieRating> ⭐{movie?.vote_average}/10</S.MovieRating>
                </S.Info>
            </S.InfoContainer>
        </S.Container>
    );
};

export default Card;

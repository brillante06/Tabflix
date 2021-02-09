import React, { FC } from 'react';
import { movieInfo } from '../../types';
import * as S from './styles';

interface movieCard {
    image: string;
    title: string;
    onClick: (movie: movieInfo, id: number) => void;
    id: number;
    movie: movieInfo;
}

const Card: FC<movieCard> = ({ image, title, onClick, id, movie }) => {
    const onClickMove = () => {
        onClick(movie, id);
    };
    return (
        <S.Container onClick={onClickMove}>
            <S.movieImage src={image} alt={title} />
            <S.movieTitle>{title}</S.movieTitle>
        </S.Container>
    );
};

export default Card;

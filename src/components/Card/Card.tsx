import React, { FC } from 'react';
import * as S from './styles';

interface movieCard {
    image: string;
    title: string;
    onClick?: () => void;
}

const Card: FC<movieCard> = ({ image, title, onClick }) => (
    <S.Container onClick={onClick}>
        <S.movieImage src={image} alt={title} />
        <S.movieTitle>title</S.movieTitle>
    </S.Container>
);

export default Card;

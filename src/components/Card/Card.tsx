import React, { FC, MutableRefObject } from 'react';
import * as S from './styles';

interface movieCard {
    image: string;
    title: string;
    onClick: (id: string) => void;
    id: string;
}

const Card: FC<movieCard> = ({ image, title, onClick, id }) => {
    const onClickMove = () => {
        if (!onclick) return;
        onClick(id);
    };
    return (
        <S.Container onClick={onClickMove}>
            <S.movieImage src={image} alt={title} />
            <S.movieTitle>{title}</S.movieTitle>
        </S.Container>
    );
};

export default Card;

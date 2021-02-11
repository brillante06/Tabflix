import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import Card from '../Card';
import CardList from '../CardList';
import * as C from '../../utils/constants';
import { movieInfo } from '../../types';
import { useRequest } from '../../hooks/useRequest';
import noImage from '../../assets/noImage.jpg';

const Popular: React.FC = () => {
    const history = useHistory();
    const { movies, error, isLoadingMore, size, setSize, mutate } = useRequest(C.MOVIE_POPULAR);

    if (error) {
        return <h1>Something went wrong</h1>;
    }
    if (!movies) {
        return <h1>Loading...</h1>;
    }
    const onClick = (movie: movieInfo, id: number) => {
        history.push(`/detail/${id}`, { movie });
    };
    return (
        <S.Container>
            <CardList>
                {movies.map((info: movieInfo, id: number) => (
                    <Card
                        title={info.title}
                        onClick={onClick}
                        id={info.id}
                        key={id}
                        image={
                            info.backdrop_path
                                ? `${C.IMAGE_URL_W500}/${info.backdrop_path}`
                                : noImage
                        }
                        movie={info}
                    ></Card>
                ))}
            </CardList>
        </S.Container>
    );
};

export default Popular;

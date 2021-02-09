import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
import * as C from '../../utils/constants';
import { movieInfo } from '../../types';
import { useRequest } from '../../hooks/useRequest';

const Popular: React.FC = () => {
    const history = useHistory();
    const { movies, error, isLoadingMore, size, setSize, mutate } = useRequest();

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
            <CardList data-testid="cardlist">
                {movies.map((info: movieInfo, id: number) => (
                    <Card
                        title={info.title}
                        onClick={onClick}
                        id={info.id}
                        key={id}
                        image={`${C.IMAGE_URL_W500}/${info.backdrop_path}`}
                        movie={info}
                        data-testid="card"
                    ></Card>
                ))}
            </CardList>
        </S.Container>
    );
};

export default Popular;

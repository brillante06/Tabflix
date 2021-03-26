import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import Card from '../Card';
import CardList from '../CardList';
import * as C from '../../utils/constants';
import { movieInfo } from '../../types';
import { useRequest } from '../../hooks/useRequest';
import noImage from '../../assets/noImage.jpg';
import Carousel from '../Carousel';
import { fetcher } from '../../utils/request';

const Popular: React.FC = () => {
    const history = useHistory();
    const [movie, setMovie] = useState<Array<movieInfo>>([]);
    const [req, setReq] = useState<string>('popular');
    const { movies, error } = useRequest(C.MOVIE_POPULAR);
    const requestType: { [req: string]: string } = {};
    requestType.popular = C.MOVIE_POPULAR;
    requestType.topRated = C.MOVIE_TOP_RATED;
    requestType.playing = C.MOVIE_NOW_PLAYING;
    useEffect(() => {
        const request = async () => {
            const result = await fetcher(requestType[req]);
            const movieArray: Array<movieInfo> = await result.results.reduce(
                (acc: Array<movieInfo>, cur: movieInfo) => acc.concat(cur),
                []
            );
            setMovie(movieArray);
        };
        request();
    }, [req]);

    if (error) {
        return <h1>Something went wrong</h1>;
    }
    if (!movies) {
        return <h1>Loading...</h1>;
    }
    const onClick = (id: number) => {
        history.push(`/detail/${id}`);
    };
    const clickEvent = (event: any) => {
        if (event.target.innerHTML === 'Now playing') {
            setReq('playing');
        } else if (event.target.innerHTML === 'Popular') {
            setReq('popular');
        } else if (event.target.innerHTML === 'Most Rated') {
            setReq('topRated');
        }
    };
    return (
        <S.Container>
            <Carousel />
            <S.TextContainer>
                <S.Text onClick={clickEvent}>Now playing</S.Text> /
                <S.Text onClick={clickEvent}>Popular</S.Text> /
                <S.Text onClick={clickEvent}>Most Rated</S.Text>
            </S.TextContainer>
            <CardList>
                {movie.map((info: movieInfo, id: number) => (
                    <Card
                        title={info.title}
                        onClick={onClick}
                        id={info.id}
                        key={id}
                        image={
                            info.backdrop_path ? `${C.IMAGE_URL_W500}/${info.poster_path}` : noImage
                        }
                        movie={info}
                    ></Card>
                ))}
            </CardList>
        </S.Container>
    );
};

export default Popular;

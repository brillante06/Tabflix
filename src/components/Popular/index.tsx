import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import * as C from '../../utils/constants';
import { movieInfo, trailerType } from '../../types';
import { useRequest } from '../../hooks/useRequest';
import Carousel from '../Carousel';
import { fetcher, getMovieList, getMovieVideo } from '../../utils/request';

const Popular: React.FC = () => {
    const [movie, setMovie] = useState<Array<movieInfo>>([]);
    const [req, setReq] = useState<string>('popular');
    const [video, setVideo] = useState<trailerType>();
    const { movies, error } = useRequest(C.MOVIE_POPULAR);
    const requestType: { [req: string]: string } = {};
    requestType.popular = C.MOVIE_POPULAR;
    requestType.topRated = C.MOVIE_TOP_RATED;
    requestType.playing = C.MOVIE_NOW_PLAYING;

    useEffect(() => {
        const request = async () => {
            const movieArray: Array<movieInfo> = await getMovieList(requestType[req]);
            setMovie(movieArray);
        };
        request();
    }, [req]);
    useEffect(() => {
        const request = async () => {
            const movies: Array<movieInfo> = await getMovieList(requestType.playing);
            const trailers: Array<Promise<trailerType>> = movies.map((val) =>
                getMovieVideo(val.id)
            );
            await Promise.all(trailers).then((trailer) => {
                const randomNumber = Math.floor(Math.random() * (trailer.length - 1));
                setVideo(trailer[randomNumber]);
            });
        };
        request();
    }, []);
    if (error) {
        return <h1>Something went wrong</h1>;
    }
    if (!movies) {
        return <h1>Loading...</h1>;
    }

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
            <div style={{ margin: '0 auto 0', fontSize: '2rem' }}>{video?.title}</div>
            <div style={{ opacity: '0.5', zIndex: -1 }}>
                <iframe
                    src={video?.path}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="100%"
                    height="400px"
                />
            </div>
            <S.TextContainer onClick={clickEvent}>
                <S.Text>Now playing</S.Text> /<S.Text>Popular</S.Text> /<S.Text>Most Rated</S.Text>
            </S.TextContainer>
            <Carousel movieArray={movie} />
        </S.Container>
    );
};

export default Popular;

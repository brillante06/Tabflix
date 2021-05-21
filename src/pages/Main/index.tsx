import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './styles';
import * as C from '../../utils/constants';
import { movieInfo, trailerType } from '../../types';
import { useRequest } from '../../hooks/useRequest';
import Carousel from '../../components/Carousel';
import { getMovieList, getMovieVideo, requestType } from '../../utils/request';

const Main: React.FC = () => {
    const [movie, setMovie] = useState<Array<movieInfo>>([]);
    const [req, setReq] = useState<string>('popular');
    const [video, setVideo] = useState<trailerType>();
    const [randomMovie, setRandomMovie] = useState<movieInfo>();
    const history = useHistory();
    const { movies, error } = useRequest(C.MOVIE_POPULAR);
    const currentState: string = requestType[req];

    useEffect(() => {
        const request = async () => {
            const movieArray: Array<movieInfo> = await getMovieList(currentState);
            setMovie(movieArray);
        };
        request();
    }, [req]);
    useEffect(() => {
        const request = async () => {
            const movies: Array<movieInfo> = await getMovieList(requestType.playing);
            const randomNumber = Math.floor(Math.random() * (movies.length - 1));
            const trailer = await getMovieVideo(movies[randomNumber].id);
            setRandomMovie(movies[randomNumber]);
            setVideo(trailer);
        };
        request();
    }, [req]);
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
            <S.VideoTitle onClick={() => history.push(`/detail/${randomMovie?.id}`)}>
                &quot;{video?.title}&quot;
            </S.VideoTitle>
            <S.OverView>{randomMovie?.overview}</S.OverView>
            <S.VideoContainer>
                <S.Video
                    src={video?.path}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                ></S.Video>
            </S.VideoContainer>
            <S.TextContainer onClick={clickEvent}>
                <S.Text isChecked={req === 'playing'}>Now playing</S.Text> /
                <S.Text isChecked={req === 'popular'}>Popular</S.Text> /
                <S.Text isChecked={req === 'topRated'}>Most Rated</S.Text>
            </S.TextContainer>
            <Carousel movieArray={movie} />
        </S.Container>
    );
};

export default Main;

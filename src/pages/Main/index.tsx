import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './styles';
import { detailMovie, movieInfo, movieList } from '../../types';
import Carousel from '../../components/Carousel';
import { fetcher, requestType, requestWithVideo, videoPath } from '../../utils/request';
import { Loader } from '../../components';

const Main: React.FC = () => {
    const [req, setReq] = useState<string>('popular');
    const [movies, setMovies] = useState<movieInfo[]>([]);
    const [randomMovie, setRandomMovie] = useState<Partial<detailMovie>>({});
    const [video, setVideo] = useState<string | null>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const history = useHistory();
    let currentState: string = requestType[req];
    const randomNumber = Math.floor(Math.random() * 19);

    useEffect(() => {
        const request = async () => {
            setIsLoading(false);
            currentState = requestType[req];
            const movie: movieList = await fetcher(currentState);
            setMovies(movie.results);
            const random: detailMovie = await fetcher(
                requestWithVideo(movie.results[randomNumber].id)
            );
            setRandomMovie(random);
            const path = await videoPath(random);
            setVideo(path);
            setIsLoading(true);
        };
        request();
    }, [req]);

    const clickEvent = (event: any) => {
        if (event.target.innerHTML === 'Now playing') {
            setReq('playing');
        } else if (event.target.innerHTML === 'Popular') {
            setReq('popular');
        } else if (event.target.innerHTML === 'Most Rated') {
            setReq('topRated');
        }
    };
    return isLoading ? (
        <S.Container>
            <S.VideoTitle onClick={() => history.push(`/detail/${randomMovie.id}`)}>
                &quot;{randomMovie.title}&quot;
            </S.VideoTitle>
            <S.OverView>{randomMovie?.overview}</S.OverView>
            <S.VideoContainer>
                {video ? (
                    <S.Video
                        src={video}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                    ></S.Video>
                ) : (
                    <S.Error>
                        <S.ErrorText>Sorry...Video is not available🙏</S.ErrorText>
                    </S.Error>
                )}
            </S.VideoContainer>
            <S.TextContainer onClick={clickEvent}>
                <S.Text isChecked={req === 'playing'}>Now playing</S.Text> /
                <S.Text isChecked={req === 'popular'}>Popular</S.Text> /
                <S.Text isChecked={req === 'topRated'}>Most Rated</S.Text>
            </S.TextContainer>
            <Carousel movieArray={movies} />
        </S.Container>
    ) : (
        <Loader />
    );
};

export default Main;

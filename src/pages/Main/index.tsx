import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './styles';
import { detailMovie, movieInfo, movieList } from '../../types';
import Carousel from '../../components/Carousel';
import { fetcher, requestType, requestWithVideo, videoPath } from '../../utils/request';
import { Loader } from '../../components';
import { AspectRatio } from '../../components/AspectRatio';

const Main: React.FC = () => {
    const [req, setReq] = useState<string>('popular');
    const [overView, setOverView] = useState<boolean>(true);
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
    setTimeout(() => setOverView(false), 5500);

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
            {video ? (
                <S.VideoContainer>
                    <S.Introduce>
                        <S.VideoTitle
                            isShow={overView}
                            onClick={() => history.push(`/detail/${randomMovie.id}`)}
                        >
                            &quot;{randomMovie.title}&quot;
                        </S.VideoTitle>
                        <S.OverView isShow={overView}>{randomMovie.overview}</S.OverView>
                    </S.Introduce>
                    <AspectRatio ratio={16 / 7}>
                        <S.Video
                            src={video}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                        ></S.Video>
                    </AspectRatio>
                </S.VideoContainer>
            ) : (
                <S.Error>
                    <S.ErrorText>Sorry...Video is not available🙏</S.ErrorText>
                </S.Error>
            )}

            <S.TextContainer onClick={clickEvent}>
                <S.Text isChecked={req === 'playing'}>Now playing</S.Text>
                <S.Showmore>모두보기&gt;</S.Showmore>
            </S.TextContainer>
            <Carousel movieArray={movies} />
        </S.Container>
    ) : (
        <Loader />
    );
};

export default Main;

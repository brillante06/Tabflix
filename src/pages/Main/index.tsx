import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import * as S from './styles';
import { detailMovie, movieInfo, movieList } from '../../types';
import Carousel from '../../components/Carousel';
import { fetcher, requestType, requestWithVideo, videoPath } from '../../utils/request';
import { Card, Loader } from '../../components';
import * as C from '../../utils/constants';
import noImage from '../../assets/noImage.jpg';

import Video from '../../components/Video';

const Main: React.FC = () => {
    const [req, setReq] = useState<string>('popular');
    const [movies, setMovies] = useState<movieInfo[]>([]);
    const [randomMovie, setRandomMovie] = useState<Partial<detailMovie>>({});
    const [video, setVideo] = useState<string | null>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
            <Video videoURL={video} movie={randomMovie} />
            <S.TextContainer onClick={clickEvent}>
                <S.Text isChecked={req === 'playing'}>Now playing</S.Text>
                <S.Showmore>모두보기&gt;</S.Showmore>
            </S.TextContainer>
            <Carousel
                items={movies.map((value: movieInfo, idx) => (
                    <Card
                        title={value.title}
                        id={value.id}
                        key={idx}
                        image={
                            value.poster_path
                                ? `${C.IMAGE_URL_W500}${value.backdrop_path}`
                                : noImage
                        }
                        movie={value}
                        tag={true}
                    />
                ))}
            />
        </S.Container>
    ) : (
        <Loader />
    );
};

export default Main;

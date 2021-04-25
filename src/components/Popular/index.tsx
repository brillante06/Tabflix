import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import * as C from '../../utils/constants';
import { movieInfo, video, videoRespose } from '../../types';
import { useRequest } from '../../hooks/useRequest';
import Carousel from '../Carousel';
import { fetcher, getMovieList } from '../../utils/request';

const Popular: React.FC = () => {
    const history = useHistory();
    const [movie, setMovie] = useState<Array<movieInfo>>([]);
    const [req, setReq] = useState<string>('popular');
    const [video, setVideo] = useState<Array<videoRespose>>([]);
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
            <div style={{ opacity: '0.5', zIndex: -1 }}>
                <iframe
                    src="https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1"
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

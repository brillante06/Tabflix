import React, { lazy, useState } from 'react';
import useSWR from 'swr';
import * as S from './styles';
import { movieInfo } from '../../types';
import { fetcher, requestType } from '../../utils/request';
import * as C from '../../utils/constants';
import noImage from '../../assets/noImage.jpg';

const Card = lazy(() => import('../../components/Card/index'));
const Carousel = lazy(() => import('../../components/Carousel/index'));
const Video = lazy(() => import('../../components/Video/index'));

const Main: React.FC = () => {
    const [req, setReq] = useState<string>('popular');
    const currentState: string = requestType[req];
    const randomNumber = Math.floor(Math.random() * 19);

    const { data: movies } = useSWR<{ results: movieInfo[] }>(currentState, fetcher, {
        suspense: true,
    });

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
            {movies && <Video video={movies.results[randomNumber]} />}
            <S.TextContainer onClick={clickEvent}>
                <S.Text isChecked={req === 'playing'}>Now playing</S.Text>
                <S.Showmore>모두보기&gt;</S.Showmore>
            </S.TextContainer>
            {movies && (
                <Carousel
                    items={movies.results.map((value: movieInfo, idx) => (
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
            )}
        </S.Container>
    );
};

export default Main;

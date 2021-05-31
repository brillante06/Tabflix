import React, { Suspense, useState } from 'react';
import useSWR from 'swr';
import * as S from './styles';
import { movieInfo } from '../../types';
import { fetcher, requestType } from '../../utils/request';
import * as C from '../../utils/constants';
import noImage from '../../assets/noImage.jpg';
import { ErrorBoundary, Loader } from '../../components';

const Card = React.lazy(() => import('../../components/Card'));
const Carousel = React.lazy(() => import('../../components/Carousel'));
const Video = React.lazy(() => import('../../components/Video'));

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
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <S.Container>
                    {movies && (
                        <ErrorBoundary>
                            <Suspense fallback={<Loader />}>
                                <Video video={movies.results[randomNumber]} />
                            </Suspense>
                        </ErrorBoundary>
                    )}
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
            </Suspense>
        </ErrorBoundary>
    );
};

export default Main;

import React, { Suspense, useState } from 'react';
import useSWR from 'swr';
import * as S from './styles';
import { movieInfo } from '../../types';
import { fetcher, requestType } from '../../utils/request';
import { ErrorBoundary, Loader } from '../../components';

const Card = React.lazy(() => import('../../components/Card'));
const Carousel = React.lazy(() => import('../../components/Carousel'));
const Video = React.lazy(() => import('../../components/Video'));

const Main: React.FC = () => {
    const POPULAR = 'popular';
    const TOPRATED = 'topRated';
    const NOWPLAYING = 'playing';
    const currentState: string = requestType[POPULAR];
    const randomNumber = Math.floor(Math.random() * 19);

    const { data: movies } = useSWR<{ results: movieInfo[] }>(currentState, fetcher, {
        suspense: true,
    });

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
                    <S.TextContainer>
                        <S.Text>Popular</S.Text>
                        <S.Showmore>모두보기&gt;</S.Showmore>
                    </S.TextContainer>
                    {movies && <Carousel requestURL={currentState} />}
                </S.Container>
                <S.TextContainer>
                    <S.Text>Now playing</S.Text>
                    <S.Showmore>모두보기&gt;</S.Showmore>
                </S.TextContainer>
                <Carousel requestURL={requestType[NOWPLAYING]} />
                <S.TextContainer>
                    <S.Text>Top Rated</S.Text>
                    <S.Showmore>모두보기&gt;</S.Showmore>
                </S.TextContainer>
                <Carousel requestURL={requestType[TOPRATED]} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default React.memo(Main);

import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import useSWR from 'swr';
import { actorInfo, detailMovie, genreColor, movieInfo } from '../../types';
import { fetcher, requestCredit, requestDetail, requestSimilar } from '../../utils/request';
import * as S from './styles';
import * as C from '../../utils/constants';
import { Loader, SmallCard } from '../../components/index';
import noImage from '../../assets/noImage.jpg';

interface movieID {
    id: string;
}
const Detail: FC<RouteComponentProps<movieID>> = ({ match }) => {
    const history = useHistory();
    const { data: detail } = useSWR<detailMovie>(requestDetail(match.params.id), fetcher, {
        suspense: true,
    });
    const { data: credits } = useSWR<{ cast: actorInfo[] }>(
        requestCredit(match.params.id),
        fetcher,
        {
            suspense: true,
        }
    );
    const { data: similar } = useSWR<{ results: movieInfo[] }>(
        requestSimilar(match.params.id),
        fetcher,
        {
            suspense: true,
        }
    );

    const onClick = (id: string) => {
        history.push(`/detail/${id}`);
        history.go(0);
    };
    return (
        <S.Container>
            <S.Background
                poster={
                    detail?.backdrop_path
                        ? `${C.IMAGE_URL_ORIGINAL}/${detail?.backdrop_path}`
                        : noImage
                }
            />
            <S.IntroduceContainer>
                <S.Poster
                    src={
                        detail?.poster_path ? `${C.IMAGE_URL_W500}/${detail?.poster_path}` : noImage
                    }
                />
                <S.InfoContainer>
                    <S.Title>
                        {detail?.title}(
                        {detail ? new Date(detail?.release_date).getFullYear() : ' '})
                    </S.Title>
                    <S.Info>평점:{detail?.vote_average}</S.Info>
                    <S.Info>런타임:{detail?.runtime}m</S.Info>
                    <S.GenreContainer>
                        {detail?.genres.map((value, index) => (
                            <S.Genre key={index} bgColor={genreColor[value.name]}>
                                {value.name}
                            </S.Genre>
                        ))}
                    </S.GenreContainer>
                    <S.Info>개봉일:{detail?.release_date}</S.Info>
                </S.InfoContainer>
            </S.IntroduceContainer>
            <S.Description>
                {detail?.tagline && <S.Tagline>{detail?.tagline}</S.Tagline>}
                {detail?.overview}
            </S.Description>
            <S.TextContainer>Actor</S.TextContainer>
            <S.ListContainer>
                {credits?.cast.length !== 0 ? (
                    credits?.cast.map((value, index) => (
                        <SmallCard
                            key={index}
                            imgName={
                                value.profile_path
                                    ? `${C.IMAGE_URL_W500}${value.profile_path}`
                                    : noImage
                            }
                            name={value.character}
                            tag={'actor'}
                            id={value.id}
                            character={value.name}
                        />
                    ))
                ) : (
                    <S.ErrorMessage>No results about actor🤷‍♀️</S.ErrorMessage>
                )}
            </S.ListContainer>
            <S.TextContainer>Similar Movie</S.TextContainer>
            <S.ListContainer>
                {similar?.results.length !== 0 ? (
                    similar?.results.map((value, index) => (
                        <SmallCard
                            name={value.title}
                            imgName={
                                value.poster_path
                                    ? `${C.IMAGE_URL_W500}${value.poster_path}`
                                    : noImage
                            }
                            onClick={() => onClick(value.id)}
                            id={value.id}
                            tag={'similar'}
                            key={index}
                        />
                    ))
                ) : (
                    <S.ErrorMessage>No results about similar movie🤷‍♂️</S.ErrorMessage>
                )}
            </S.ListContainer>
        </S.Container>
    );
};

export default withRouter(React.memo(Detail));

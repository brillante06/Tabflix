import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import {
    actorInfo,
    creditResponse,
    detailMovie,
    movieInfo,
    popularResponseType,
} from '../../types';
import { fetcher, requestCredit, requestDetail, requestSimilar } from '../../utils/request';
import * as S from './styles';
import * as C from '../../utils/constants';
import Loader from '../Loader';

interface movieID {
    id: string;
}
const Detail: FC<RouteComponentProps<movieID>> = ({ match }) => {
    const [detail, setDetail] = useState<detailMovie>();
    const [similar, setSimilar] = useState<Array<movieInfo>>([]);
    const [credits, setCredits] = useState<Array<actorInfo>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();
    const getData = async () => {
        setIsLoading(true);
        const movieDetail: detailMovie = await fetcher(requestDetail(match.params.id));
        setDetail(movieDetail);
        const movieCredit: creditResponse = await fetcher(requestCredit(match.params.id));
        const credit: Array<actorInfo> = movieCredit.cast;
        setCredits(credit);
        const movieSimilar: popularResponseType = await fetcher(requestSimilar(match.params.id));
        setSimilar(movieSimilar.results);
        setIsLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);
    if (error) {
        return <p>something went wrong</p>;
    }
    const onClick = (id: number) => {
        history.push(`/detail/${id}`);
        history.go(0);
    };
    return isLoading ? (
        <Loader />
    ) : (
        <S.Container>
            <S.IntroduceContainer>
                {detail ? (
                    <S.Poster src={`${C.IMAGE_URL_W500}/${detail?.poster_path}`} />
                ) : (
                    <S.Poster />
                )}
                <S.InfoContainer>
                    <S.Title>
                        🎥{detail?.title}(
                        {detail ? new Date(detail?.release_date).getFullYear() : ' '})
                    </S.Title>
                    <S.RunningTime>⏱️{`${detail?.runtime}분`}</S.RunningTime>
                    <S.Title>
                        👀
                        {detail?.genres.map((value, index) => (index ? ', ' : '') + value.name)}
                    </S.Title>
                </S.InfoContainer>
            </S.IntroduceContainer>
            <S.Distinct />
            {detail?.tagline !== '' ? <S.Tagline>{detail?.tagline}</S.Tagline> : ''}
            <S.Description>{detail?.overview}</S.Description>
            <h3>Actor</h3>
            <S.ListContainer>
                {credits?.map((value, index) => (
                    <S.Actor key={index}>
                        <S.ActorImage src={`${C.IMAGE_URL_W500}/${value.profile_path}`} />
                        <S.ActorName>{value.character}</S.ActorName>
                    </S.Actor>
                ))}
            </S.ListContainer>
            <h2>Similar movie</h2>
            <S.ListContainer>
                {similar.map((value, index) => (
                    <S.Similar key={index} onClick={() => onClick(value.id)}>
                        <S.SimilarImage src={`${C.IMAGE_URL_W500}/${value.poster_path}`} />
                        <S.SimilarTitle>{value.title}</S.SimilarTitle>
                    </S.Similar>
                ))}
            </S.ListContainer>
        </S.Container>
    );
};

export default withRouter(Detail);

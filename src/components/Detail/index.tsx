import React, { FC, useEffect, useRef, useState } from 'react';
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
import noImage from '../../assets/noImage.jpg';
import SmallCard from '../SmallCard';

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
        <S.Container poster={`${C.IMAGE_URL_ORIGINAL}${detail?.backdrop_path}`}>
            <S.Background poster={`${C.IMAGE_URL_ORIGINAL}${detail?.backdrop_path}`} />
            <S.IntroduceContainer>
                {detail ? (
                    <S.Poster src={`${C.IMAGE_URL_W500}/${detail?.poster_path}`} />
                ) : (
                    <S.Poster />
                )}
                <S.InfoContainer>
                    <S.Title>
                        {detail?.title}(
                        {detail ? new Date(detail?.release_date).getFullYear() : ' '})
                    </S.Title>
                    <h3>평점:{detail?.vote_average}</h3>
                    <h3>런타임:{detail?.runtime}m</h3>
                    <h3>
                        👀
                        {detail?.genres.map((value, index) => (index ? ', ' : '') + value.name)}
                    </h3>
                    <h3>개봉일:{detail?.release_date}</h3>
                </S.InfoContainer>
            </S.IntroduceContainer>

            <S.Description>
                {detail?.tagline && <S.Tagline>{detail?.tagline}</S.Tagline>}
                {detail?.overview}
            </S.Description>
            <S.ListContainer>
                <h2>Actor</h2>
            </S.ListContainer>
            <S.ListContainer>
                {credits?.map((value, index) => (
                    <SmallCard
                        key={index}
                        imgName={
                            value.profile_path ? `${C.IMAGE_URL_W500}/${value.profile_path}` : null
                        }
                        name={value.character}
                        tag={'actor'}
                        id={value.id}
                    />
                ))}
            </S.ListContainer>
            <S.ListContainer>
                <h2>Similar movie</h2>
            </S.ListContainer>

            <S.ListContainer>
                {similar.map((value, index) => (
                    <SmallCard
                        name={value.title}
                        imgName={
                            value.poster_path ? `${C.IMAGE_URL_W500}/${value.poster_path}` : noImage
                        }
                        onClick={() => onClick(value.id)}
                        id={value.id}
                        tag={'similar'}
                        key={index}
                    />
                ))}
            </S.ListContainer>
        </S.Container>
    );
};

export default withRouter(React.memo(Detail));

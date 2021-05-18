import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { actorInfo, detailMovie, genreColor, movieInfo } from '../../types';
import * as req from '../../utils/request';
import * as S from './styles';
import * as C from '../../utils/constants';
import { Loader, SmallCard } from '../../components/index';
import noImage from '../../assets/noImage.jpg';

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
        const movieDetail: detailMovie = await req.getMovieDetail(match.params.id);
        setDetail(movieDetail);
        const actorCredit: Array<actorInfo> = await req.getMovieCredit(match.params.id);
        setCredits(actorCredit);
        const movieSimilar: Array<movieInfo> = await req.getMovieSimilar(match.params.id);
        setSimilar(movieSimilar);
        setIsLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);

    if (error) {
        return <p>something went wrong</p>;
    }
    const onClick = (id: string) => {
        history.push(`/detail/${id}`);
        history.go(0);
    };
    return isLoading ? (
        <Loader />
    ) : (
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
            <S.ListContainer isOverflow={false}>
                <S.Info>Actor</S.Info>
            </S.ListContainer>
            <S.ListContainer>
                {credits.length !== 0 ? (
                    credits?.map((value, index) => (
                        <SmallCard
                            key={index}
                            imgName={
                                value.profile_path
                                    ? `${C.IMAGE_URL_W500}/${value.profile_path}`
                                    : noImage
                            }
                            name={value.character}
                            tag={'actor'}
                            id={value.id}
                            character={value.name}
                        />
                    ))
                ) : (
                    <h1>No results about actor</h1>
                )}
            </S.ListContainer>
            <S.ListContainer isOverflow={false}>
                <S.Info>Similar movie</S.Info>
            </S.ListContainer>
            <S.ListContainer>
                {similar.length !== 0 ? (
                    similar.map((value, index) => (
                        <SmallCard
                            name={value.title}
                            imgName={
                                value.poster_path
                                    ? `${C.IMAGE_URL_W500}/${value.poster_path}`
                                    : noImage
                            }
                            onClick={() => onClick(value.id)}
                            id={value.id}
                            tag={'similar'}
                            key={index}
                        />
                    ))
                ) : (
                    <h1>No results about similar movie</h1>
                )}
            </S.ListContainer>
        </S.Container>
    );
};

export default withRouter(React.memo(Detail));

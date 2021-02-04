import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../utils/request';
import * as S from './styles';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
import * as C from '../../utils/constants';

const Popular: React.FC = () => {
    const { data, error } = useSWR(
        `${process.env.REACT_APP_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`,
        fetcher
    );
    if (error) {
        return <div>failed to load</div>;
    }
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <S.Container>
            <CardList>
                {data.results.map((key: any, idx: number) => (
                    <Card
                        image={`${C.IMAGE_URL_W500}/${key.backdrop_path}`}
                        title={key.title}
                        onClick={() => alert(key.overview)}
                        key={idx}
                    />
                ))}
            </CardList>
        </S.Container>
    );
};

export default Popular;

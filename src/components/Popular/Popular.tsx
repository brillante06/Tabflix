import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { useHistory } from 'react-router-dom';
import { fetcher } from '../../utils/request';
import * as S from './styles';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
import * as C from '../../utils/constants';

const Popular: React.FC = () => {
    const history = useHistory();
    const { data, error } = useSWR(
        `${process.env.REACT_APP_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=3`,
        fetcher
    );
    if (error) {
        return <div>failed to load</div>;
    }
    if (!data) {
        return <div>Loading...</div>;
    }
    const onClick = (id: string) => {
        history.push(`/detail/${id}`);
    };

    return (
        <S.Container>
            <CardList>
                {data.results.map((key: any, idx: number) => (
                    <Card
                        image={`${C.IMAGE_URL_ORIGINAL}/${key.backdrop_path}`}
                        title={key.title}
                        key={idx}
                        onClick={onClick}
                        id={key.id}
                        adults={key.adults}
                    />
                ))}
            </CardList>
        </S.Container>
    );
};

export default Popular;

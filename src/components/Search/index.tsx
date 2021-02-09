import React, { useEffect, useState } from 'react';
import * as S from './styles';
import * as C from '../../utils/constants';
import useSWR from 'swr';
import { fetcher } from '../../utils/request';
import { movieInfo } from '../../types';
const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [movieList, setMovieList] = useState<Array<string>>([]);
    useEffect(() => {
        const { data, error } = useSWR(`${C.MOVIE_SEARCH}${searchValue}`, fetcher);
        const searchList: Array<string> = data.results.reduce(
            (acc: Array<string>, cur: movieInfo) => acc.push(cur.title),
            []
        );
        setMovieList(movieList.concat(...searchList));
    }, [searchValue]);
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };
    return (
        <S.Container>
            <S.Input
                placeholder="영화를 검색해보세요"
                onChange={onChange}
                value={searchValue}
            ></S.Input>
        </S.Container>
    );
};
export default Search;

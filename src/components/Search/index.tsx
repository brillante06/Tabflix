import React, { useEffect, useRef, useState } from 'react';
import useSWR, { mutate } from 'swr';
import * as S from './styles';
import * as C from '../../utils/constants';
import { fetcher } from '../../utils/request';
import { movieInfo, popularResponseType } from '../../types';
import { useDebounce } from '../../hooks/useDebounce';
import Loader from '../Loader';

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isSearching, setIsSearching] = useState(false);
    const [movieList, setMovieList] = useState<Array<movieInfo>>([]);
    const debounceValue = useDebounce(searchValue, 350);
    useEffect(() => {
        if (debounceValue !== '') {
            const data = async () => {
                await setIsSearching(true);
                const value: popularResponseType = await fetcher(`${C.MOVIE_SEARCH}${searchValue}`);
                await setIsSearching(false);
                setMovieList(value.results);
            };
            data();
        } else {
            setMovieList([]);
        }
    }, [debounceValue]);

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
            <S.movieList>
                {isSearching ? (
                    <Loader />
                ) : (
                    movieList.map((movie: movieInfo, index: number) => (
                        <S.movieName key={index}>{movie.title}</S.movieName>
                    ))
                )}
            </S.movieList>
        </S.Container>
    );
};
export default Search;

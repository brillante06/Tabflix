import React, { useEffect, useRef, useState } from 'react';
import useSWR, { mutate } from 'swr';
import * as S from './styles';
import * as C from '../../utils/constants';
import { fetcher } from '../../utils/request';
import { movieInfo, popularResponseType } from '../../types';

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [movieList, setMovieList] = useState<Array<movieInfo>>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (searchValue !== '') {
            const data = async () => {
                setMovieList([]);
                const value: popularResponseType = await fetcher(`${C.MOVIE_SEARCH}${searchValue}`);
                setMovieList(value.results);
            };
            data();
        }
    }, [searchValue]);
    useEffect(() => {
        if (scrollRef.current && movieList.length >= 1) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [movieList, scrollRef]);
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
            <S.movieList ref={scrollRef}>
                {movieList.map((movie: movieInfo, index: number) => (
                    <S.movieName key={index}>{movie.title}</S.movieName>
                ))}
            </S.movieList>
        </S.Container>
    );
};
export default Search;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetcher } from '../../utils/request';
import { movieInfo, popularResponseType } from '../../types';
import { useDebounce } from '../../hooks/useDebounce';
import Loader from '../Loader';
import * as S from './styles';
import * as C from '../../utils/constants';

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isSearching, setIsSearching] = useState(false);
    const [movieList, setMovieList] = useState<Array<movieInfo>>([]);
    const debounceValue = useDebounce(searchValue, 350);
    const history = useHistory();

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
                aria-label="movie-input"
            ></S.Input>
            <S.movieList data-testid="movie-list">
                {isSearching ? (
                    <Loader />
                ) : debounceValue !== '' && movieList.length === 0 ? (
                    <S.movieName>No results for {searchValue}</S.movieName>
                ) : (
                    movieList.map((movie: movieInfo, index: number) => (
                        <S.movieName
                            data-testid="movie-title"
                            key={index}
                            onClick={() => {
                                history.replace(`/detail/${movie.id}`);
                            }}
                        >
                            {movie.title}
                        </S.movieName>
                    ))
                )}
            </S.movieList>
        </S.Container>
    );
};
export default Search;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetcher } from '../../utils/request';
import { movieInfo, movieList } from '../../types';
import { useDebounce } from '../../hooks/useDebounce';
import { Loader } from '../index';
import * as S from './styles';
import * as C from '../../utils/constants';

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isSearching, setIsSearching] = useState(false);
    const [movieList, setMovieList] = useState<Array<movieInfo>>([]);
    const [searchIndex, setSearchIndex] = useState(0);
    const debounceValue = useDebounce(searchValue, 350);
    const history = useHistory();

    useEffect(() => {
        if (debounceValue !== '') {
            const data = async () => {
                await setIsSearching(true);
                const value: movieList = await fetcher(`${C.MOVIE_SEARCH}${searchValue}`);
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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            if (searchIndex > 0) {
                setSearchIndex((searchIndex) => searchIndex - 1);
            } else if (searchIndex === 0) {
                setSearchIndex(movieList.length - 1);
            }
        } else if (e.key === 'ArrowDown') {
            if (searchIndex < movieList.length - 1) {
                setSearchIndex((searchIndex) => searchIndex + 1);
            } else if (searchIndex === movieList.length - 1) {
                setSearchIndex(0);
            }
        } else if (e.key === 'Enter') {
            history.replace(`/detail/${movieList[searchIndex].id}`);
        }
    };
    return (
        <S.Container>
            <S.Input
                placeholder="영화를 검색해보세요"
                onChange={onChange}
                value={searchValue}
                aria-label="movie-input"
                autoFocus
                onKeyDown={handleKeyDown}
            />
            <S.movieList data-testid="movie-list">
                {isSearching ? (
                    <Loader />
                ) : debounceValue !== '' && movieList.length === 0 ? (
                    <S.movieName color={'#ffffff'}>No results for {searchValue}</S.movieName>
                ) : (
                    movieList.map((movie: movieInfo, index: number) => (
                        <S.movieName
                            data-testid="movie-title"
                            key={index}
                            onClick={() => {
                                history.replace(`/detail/${movie.id}`);
                            }}
                            color={index === searchIndex ? '#dee1e5' : '#ffffff'}
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

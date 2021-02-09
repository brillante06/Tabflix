import React, { useEffect, useState } from 'react';
import * as S from './styles';
import * as C from '../../utils/constants';
import useSWR from 'swr';
import { fetcher } from '../../utils/request';
const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {}, [searchValue]);
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

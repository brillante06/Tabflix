import React, { FC } from 'react';
import tmdb from '../../assets/tmdb.jpg';
import * as S from './styles';

const About: FC = () => (
    <S.Container>
        <S.Image src={tmdb}></S.Image>
        <S.Introduce>
            TMDB를 사용해서 만든 사이트 입니다. <br /> <br />
            넷플릭스의 처음화면을 모티브로 삼아 랜덤으로 인기 있는 영화중 하나의 예고편을 보여주도록
            하였습니다. 영화 검색 및 인기 있는 영화,평점이 높은 영화를 한눈에 볼 수 있도록
            구현하였습니다. 반응형 웹으로 구현하여 모바일에서도 안정적으로 볼 수 있습니다.
            <br />
            <br />
            <br />
            추후 로그인 기능을 추가하고 tmdb를 연동하여 리뷰를 쓰고 볼 수 있도록 할 예정입니다.
        </S.Introduce>
    </S.Container>
);

export default About;

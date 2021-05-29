import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { detailMovie } from '../../types';
import { AspectRatio } from '../AspectRatio';
import * as S from './styles';

interface Props {
    videoURL: string | null;
    movie: Partial<detailMovie>;
}
const Video: React.FC<Props> = ({ videoURL, movie }) => {
    const [overView, setOverView] = useState<boolean>(true);
    const { overview, id, title } = movie;
    setTimeout(() => setOverView(false), 5500);
    const history = useHistory();
    return videoURL ? (
        <S.VideoContainer>
            <S.Introduce>
                <S.VideoTitle isShow={overView} onClick={() => history.push(`/detail/${id}`)}>
                    &quot;{title}&quot;
                </S.VideoTitle>
                <S.OverView isShow={overView}>{overview}</S.OverView>
            </S.Introduce>
            <AspectRatio ratio={16 / 7}>
                <S.Video
                    src={videoURL}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                ></S.Video>
            </AspectRatio>
        </S.VideoContainer>
    ) : (
        <S.Error>
            <S.ErrorText>Sorry...Video is not available🙏</S.ErrorText>
        </S.Error>
    );
};

export default Video;

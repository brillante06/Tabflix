import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useSWR from 'swr';
import { detailMovie, movieInfo } from '../../types';
import { fetcher, requestWithVideo, videoPath } from '../../utils/request';
import { AspectRatio } from '../index';
import * as S from './styles';

interface Props {
    video: movieInfo;
}
const Video: React.FC<Props> = ({ video }) => {
    const [overView, setOverView] = useState<boolean>(true);
    const { data: detail } = useSWR<detailMovie>(requestWithVideo(video.id), fetcher, {
        suspense: true,
    });
    let URL: string | null = null;
    if (detail) {
        URL = videoPath(detail);
    }
    setTimeout(() => setOverView(false), 5500);
    const history = useHistory();
    return URL ? (
        <S.VideoContainer>
            <S.Introduce>
                <S.VideoTitle
                    isShow={overView}
                    onClick={() => history.push(`/detail/${detail?.id}`)}
                >
                    &quot;{detail?.title}&quot;
                </S.VideoTitle>
                <S.OverView isShow={overView}>{detail?.overview}</S.OverView>
            </S.Introduce>
            <AspectRatio ratio={16 / 5.5}>
                <S.Video
                    src={URL}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                ></S.Video>
            </AspectRatio>
        </S.VideoContainer>
    ) : (
        <S.Error>
            <S.ErrorText>
                Sorry...Video is not available🙏 <br />
                If you want to see other movie,please refresh
            </S.ErrorText>
        </S.Error>
    );
};

export default React.memo(Video);

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useSWR from 'swr';
import { detailMovie, movieInfo } from '../../types';
import { fetcher, requestWithVideo, videoPath } from '../../utils/request';
import { AspectRatio } from '../index';
import * as S from './styles';

interface Props {
    videoURL?: string | null;
    movie?: Partial<detailMovie>;
    video: movieInfo;
}
const Video: React.FC<Props> = ({ videoURL, movie, video }) => {
    const [overView, setOverView] = useState<boolean>(true);
    const { data: detail } = useSWR<detailMovie>(requestWithVideo(video.id), fetcher, {
        suspense: true,
    });
    if (!detail) {
        return <div>Loading...</div>;
    }
    const URL: string | null = videoPath(detail);
    // const { overview, id, title } = movie;
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
            <AspectRatio ratio={16 / 7}>
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
            <S.ErrorText>Sorry...Video is not available🙏</S.ErrorText>
        </S.Error>
    );
};

export default Video;

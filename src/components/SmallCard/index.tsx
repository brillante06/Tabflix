import React, { useRef } from 'react';
import * as S from './styles';
import { useIntersecting } from '../../hooks/useIntersecting';
import { Image } from '../index';
import AspectRatio from '../AspectRatio';

interface infoProps {
    name: string;
    character?: string;
    imgName: string | undefined;
    onClick?: (id: string) => void;
    tag: string;
    id: string;
}
const SmallCard: React.FC<infoProps> = ({ name, imgName, tag, id, onClick, character }) => {
    const onClickMove = () => {
        if (onClick) onClick(id);
    };
    const lazyRef = useRef<HTMLImageElement | null>(null);
    const lazyLoading: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyimage = entry.target as HTMLImageElement;
                observer.unobserve(entry.target);
                if (lazyimage.dataset.src) lazyimage.src = lazyimage.dataset.src;
            }
        });
    };
    useIntersecting(lazyRef, lazyLoading);
    return (
        <S.Container onClick={onClickMove}>
            <S.ImgWrapper>
                <AspectRatio ratio={10 / 15}>
                    <Image src={imgName} alt={name} ref={lazyRef} />
                </AspectRatio>
            </S.ImgWrapper>
            <S.Character tag={tag}>{character}</S.Character>
            <S.Name>
                {name} {tag === 'similar' ? '' : '역'}
            </S.Name>
        </S.Container>
    );
};
export default SmallCard;

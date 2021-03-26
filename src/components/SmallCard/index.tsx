import React, { useRef } from 'react';
import * as S from './styles';
import { useIntersecting } from '../../hooks/useIntersecting';
import lazyImage from '../../assets/lazyImage.jpg';
import noImage from '../../assets/noImage.jpg';
import Image from '../Image';

interface infoProps {
    name: string;
    imgName: string | null;
    onClick?: (id: number) => void;
    tag: string;
    id: number;
}
const SmallCard: React.FC<infoProps> = ({ name, imgName, tag, id, onClick }) => {
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
        <S.Container onClick={onClickMove} tag={tag}>
            <Image src={imgName} alt={name} ref={lazyRef} width={'200vw'} />
            <S.Name>{name}</S.Name>
        </S.Container>
    );
};
export default SmallCard;

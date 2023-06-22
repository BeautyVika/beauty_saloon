import React, {FC} from 'react';
import iconsSprite from '../../assets/img/sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: FC<IconPropsType>= ({
                                           iconId,
                                           width,
                                           height,
                                           viewBox
}) => {
    return (
        <svg width={width || "40"}
             height={height || "40"}
             viewBox={viewBox || "0 0 40 40"}
             fill="none"
             xmlns="http://www.w3.org/2000/svg">

            <use xlinkHref={`${iconsSprite}#${iconId}`}/>

        </svg>
    );
};
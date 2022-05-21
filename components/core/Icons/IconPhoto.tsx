import IconWrapper from "./IconWrapper";
import PhotoSvg from './assets/photos.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconPhoto: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={PhotoSvg}/>
    )
}

export default IconPhoto;
import IconWrapper from "./IconWrapper";
import GoogleSvg from './assets/google.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconGoogle: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={GoogleSvg}/>
    )
}

export default IconGoogle;
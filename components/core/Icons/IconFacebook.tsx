import IconWrapper from "./IconWrapper";
import FacebookSvg from './assets/facebook.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconFacebook: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={FacebookSvg}/>
    )
}

export default IconFacebook;
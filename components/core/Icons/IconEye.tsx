import IconWrapper from "./IconWrapper";
import EyeSvg from './assets/eye.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconEye: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={EyeSvg}/>
    )
}

export default IconEye;
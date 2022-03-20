import IconWrapper from "./IconWrapper";
import EyeCloseSvg from './assets/eye-close.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconEyeClose: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={EyeCloseSvg}/>
    )
}

export default IconEyeClose;
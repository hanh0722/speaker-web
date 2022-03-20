import IconWrapper from "./IconWrapper";
import CheckSvg from './assets/check.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconCheck: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={CheckSvg}/>
    )
}

export default IconCheck;
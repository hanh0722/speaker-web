import IconWrapper from "./IconWrapper";
import CloseSvg from './assets/close.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconClose: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={CloseSvg}/>
    )
}

export default IconClose;
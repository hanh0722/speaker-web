import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import CaretSvg from "./assets/caret.svg";
import { IconWrapperProps } from "../../../types/component";

const IconCaret: FC<IconWrapperProps> = (props) => {
    const {variant} = props;
    return (
       <IconWrapper variant={variant}  icon={CaretSvg}/>
    )
}

export default IconCaret;
import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import ArrowLeftSvg from "./assets/arrow-left.svg";
import { IconWrapperProps } from "../../../types/component";

const IconArrowLeft: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper variant={variant} icon={ArrowLeftSvg} />;
};

export default IconArrowLeft;

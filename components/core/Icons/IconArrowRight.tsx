import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import ArrowRightSvg from "./assets/arrow-right.svg";
import { IconWrapperProps } from "../../../types/component";

const IconArrowRight: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper variant={variant} icon={ArrowRightSvg} />;
};

export default IconArrowRight;

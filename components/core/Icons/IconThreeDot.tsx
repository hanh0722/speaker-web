import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import ThreeDotSvg from "./assets/three-dot.svg";
import { IconWrapperProps } from "../../../types/component";

const IconThreeDot: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper {...props} variant={variant} icon={ThreeDotSvg} />;
};

export default IconThreeDot;

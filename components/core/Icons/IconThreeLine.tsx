import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import ThreeLineSvg from "./assets/three-line.svg";
import { IconWrapperProps } from "../../../types/component";

const IconThreeLine: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper {...props} variant={variant} icon={ThreeLineSvg} />;
};

export default IconThreeLine;

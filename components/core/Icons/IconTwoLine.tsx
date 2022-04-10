import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import TwoLineSvg from "./assets/two-line.svg";
import { IconWrapperProps } from "../../../types/component";

const IconTwoLine: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper {...props} variant={variant} icon={TwoLineSvg} />;
};

export default IconTwoLine;

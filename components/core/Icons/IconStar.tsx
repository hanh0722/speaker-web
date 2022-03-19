import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import StarSvg from "./assets/star.svg";
import { IconWrapperProps } from "../../../types/component";

const IconStar: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper variant={variant} icon={StarSvg} />;
};

export default IconStar;

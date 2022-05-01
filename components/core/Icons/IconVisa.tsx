import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import VisaSvg from "./assets/icon-visa.svg";
import { IconWrapperProps } from "../../../types/component";

const IconVisa: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper variant={variant} icon={VisaSvg} />;
};

export default IconVisa;

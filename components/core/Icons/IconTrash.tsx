import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import TrashSvg from "./assets/delete.svg";
import { IconWrapperProps } from "../../../types/component";

const IconTrash: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper {...props} variant={variant} icon={TrashSvg} />;
};

export default IconTrash;

import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import UserSvg from "./assets/user.svg";
import { IconWrapperProps } from "../../../types/component";

const IconUser: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper variant={variant} icon={UserSvg} />;
};

export default IconUser;

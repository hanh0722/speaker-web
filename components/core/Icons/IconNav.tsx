import IconWrapper from "./IconWrapper";
import NavSvg from "./assets/nav.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconNav: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={NavSvg} />;
};

export default IconNav;

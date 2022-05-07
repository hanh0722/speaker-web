import IconWrapper from "./IconWrapper";
import MaskSvg from "./assets/mask.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconMask: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={MaskSvg} />;
};

export default IconMask;

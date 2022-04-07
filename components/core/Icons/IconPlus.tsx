import IconWrapper from "./IconWrapper";
import PlusSvg from "./assets/plus.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconPlus: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={PlusSvg} />;
};

export default IconPlus;

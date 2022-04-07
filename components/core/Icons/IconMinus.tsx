import IconWrapper from "./IconWrapper";
import MinusSvg from "./assets/minus.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconMinus: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={MinusSvg} />;
};

export default IconMinus;

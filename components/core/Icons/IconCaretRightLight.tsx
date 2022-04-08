import IconWrapper from "./IconWrapper";
import CartSvg from "./assets/caret-right-light.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconCaretLightRight: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={CartSvg} />;
};

export default IconCaretLightRight;

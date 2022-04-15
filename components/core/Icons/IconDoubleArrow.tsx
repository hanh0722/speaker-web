import IconWrapper from "./IconWrapper";
import DoubleArrowSvg from "./assets/double-arrow.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconDoubleArrow: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={DoubleArrowSvg} />;
};

export default IconDoubleArrow;

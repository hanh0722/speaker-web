import IconWrapper from "./IconWrapper";
import CompareSvg from "./assets/dollar.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconDollar: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={CompareSvg} />;
};

export default IconDollar;

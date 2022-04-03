import IconWrapper from "./IconWrapper";
import CompareSvg from "./assets/compare.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconCompare: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={CompareSvg} />;
};

export default IconCompare;

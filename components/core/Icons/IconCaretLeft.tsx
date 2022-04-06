import IconWrapper from "./IconWrapper";
import CaretLeftSvg from "./assets/caret-left.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconCaretLeft: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={CaretLeftSvg} />;
};

export default IconCaretLeft;

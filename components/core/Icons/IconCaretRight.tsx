import IconWrapper from "./IconWrapper";
import CaretRightSvg from "./assets/caret-right.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconCaretRight: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={CaretRightSvg} />;
};

export default IconCaretRight;

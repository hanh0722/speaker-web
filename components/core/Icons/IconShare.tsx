import IconWrapper from "./IconWrapper";
import ShareSvg from "./assets/share.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconShare: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={ShareSvg} />;
};

export default IconShare;

import IconWrapper from "./IconWrapper";
import InstagramSvg from "./assets/instagram.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconInstagram: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={InstagramSvg} />;
};

export default IconInstagram;

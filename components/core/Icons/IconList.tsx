import IconWrapper from "./IconWrapper";
import InstagramSvg from "./assets/list.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconList: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={InstagramSvg} />;
};

export default IconList;

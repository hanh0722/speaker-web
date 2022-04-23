import IconWrapper from "./IconWrapper";
import LoveSuccessSvg from "./assets/love-success.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconLoveSuccess: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={LoveSuccessSvg} />;
};

export default IconLoveSuccess;

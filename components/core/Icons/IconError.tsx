import IconWrapper from "./IconWrapper";
import ErrorSvg from "./assets/error.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconError: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={ErrorSvg} />;
};

export default IconError;

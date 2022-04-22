import IconWrapper from "./IconWrapper";
import DropzoneSvg from "./assets/dropzone.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconDropzone: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={DropzoneSvg} />;
};

export default IconDropzone;

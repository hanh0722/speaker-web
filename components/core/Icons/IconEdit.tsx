import IconWrapper from "./IconWrapper";
import EditSvg from "./assets/edit.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconEdit: FC<IconWrapperProps> = (props) => {
  console.log(props);
  return <IconWrapper {...props} icon={EditSvg} />;
};

export default IconEdit;

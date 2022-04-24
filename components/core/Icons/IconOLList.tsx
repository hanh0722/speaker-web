import IconWrapper from "./IconWrapper";
import OLList from "./assets/ol-list.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconOLList: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={OLList} />;
};

export default IconOLList;

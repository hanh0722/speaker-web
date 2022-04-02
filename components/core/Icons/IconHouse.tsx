import IconWrapper from "./IconWrapper";
import HouseSvg from "./assets/house.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconHouse: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={HouseSvg} />;
};

export default IconHouse;

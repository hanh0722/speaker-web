import IconWrapper from "./IconWrapper";
import FilterSvg from "./assets/filter.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconFilter: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={FilterSvg} />;
};

export default IconFilter;

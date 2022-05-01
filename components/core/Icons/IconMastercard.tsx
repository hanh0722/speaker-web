import IconWrapper from "./IconWrapper";
import MasterCardSvg from "./assets/icon-mastercard.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconMasterCard: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={MasterCardSvg} />;
};

export default IconMasterCard;

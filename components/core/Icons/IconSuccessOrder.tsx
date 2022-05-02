import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import SuccessOrderSvg from "./assets/success-order.svg";
import { IconWrapperProps } from "../../../types/component";

const IconSuccessOrder: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper variant={variant} icon={SuccessOrderSvg} />;
};

export default IconSuccessOrder;

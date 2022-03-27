import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import SuccessOTPSvg from "./assets/success-otp.svg";
import { IconWrapperProps } from "../../../types/component";

const IconSuccessOTP: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper {...props} variant={variant} icon={SuccessOTPSvg} />;
};

export default IconSuccessOTP;

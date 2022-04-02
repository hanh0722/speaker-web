import React, { FC } from "react";
import IconWrapper from "./IconWrapper";
import VolumeSVg from "./assets/volume.svg";
import { IconWrapperProps } from "../../../types/component";

const IconVolume: FC<IconWrapperProps> = (props) => {
  const { variant } = props;
  return <IconWrapper variant={variant} icon={VolumeSVg} />;
};

export default IconVolume;

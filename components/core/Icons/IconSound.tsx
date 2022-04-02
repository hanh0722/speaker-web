import IconWrapper from "./IconWrapper";
import SoundSvg from "./assets/sound.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconSound: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={SoundSvg} />;
};

export default IconSound;

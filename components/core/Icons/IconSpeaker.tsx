import IconWrapper from "./IconWrapper";
import SpeakerSvg from "./assets/speaker.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconSpeaker: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={SpeakerSvg} />;
};

export default IconSpeaker;

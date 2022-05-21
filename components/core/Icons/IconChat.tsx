import IconWrapper from "./IconWrapper";
import ChatSvg from "./assets/chat.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconChat: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={ChatSvg} />;
};

export default IconChat;

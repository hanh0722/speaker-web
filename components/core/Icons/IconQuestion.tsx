import IconWrapper from "./IconWrapper";
import QuestionSvg from "./assets/question.svg";
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconQuestion: FC<IconWrapperProps> = (props) => {
  return <IconWrapper {...props} icon={QuestionSvg} />;
};

export default IconQuestion;

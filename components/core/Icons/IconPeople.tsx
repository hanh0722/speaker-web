import IconWrapper from "./IconWrapper";
import PeopleSvg from './assets/people.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconPeople: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={PeopleSvg}/>
    )
}

export default IconPeople;
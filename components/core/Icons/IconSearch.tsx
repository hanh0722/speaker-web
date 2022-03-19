import IconWrapper from "./IconWrapper";
import SearchSvg from './assets/search.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconSearch: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={SearchSvg}/>
    )
}

export default IconSearch;
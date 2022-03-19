import IconWrapper from "./IconWrapper";
import CartSvg from './assets/cart.svg';
import { FC } from "react";
import { IconWrapperProps } from "../../../types/component";

const IconCart: FC<IconWrapperProps> = (props) => {
    return (
        <IconWrapper {...props} icon={CartSvg}/>
    )
}

export default IconCart;
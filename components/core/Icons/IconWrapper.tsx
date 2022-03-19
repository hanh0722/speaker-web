import React, { FC } from "react";
import { IconWrapperProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const IconWrapper: FC<IconWrapperProps> = (props) => {
    const {icon: IconName, className, variant = 'md'} = props;
    if (IconName) {
        return (
            <IconName className={classList(styles.icon, styles[variant] ,className)}/>
        )
    }
    return null;
}

export default IconWrapper;
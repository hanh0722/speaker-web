import React, { FC, forwardRef } from "react";
import PropTypes from 'prop-types';
import { HamburgerProps } from "../../../types/component";
import styles from './styles.module.scss';
import { generateArray } from "../../../utils/array";
import { classList } from "../../../utils/string";

const Hamburger = forwardRef<HTMLDivElement, HamburgerProps>((props, ref) => {
    const {variant = 3, className, onClick} = props;
    return (
        <div ref={ref} onClick={onClick} className={classList('d-flex justify-center align-center flex-column' ,styles.hamburger, className)}>
            {generateArray(variant).map(item => {
                return <div key={item}/>
            })} 
        </div>
    )
})

Hamburger.displayName = 'Hamburger';
export default Hamburger;
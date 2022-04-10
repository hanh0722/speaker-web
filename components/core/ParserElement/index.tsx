import React, { FC } from "react";
import { ParserElementProps } from "../../../types/components/ParserElement";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const ParserElement: FC<ParserElementProps> = (props) => {
  const {content, className, ...restProps} = props;
  return (
    <div className={classList(styles.parser, className)} {...restProps} dangerouslySetInnerHTML={{__html: content}}/>
  )
}

export default ParserElement;
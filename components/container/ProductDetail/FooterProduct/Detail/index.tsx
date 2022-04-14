import React, { FC } from "react";
import { ClassNameProps } from "../../../../../types/string";
import { classList } from "../../../../../utils/string";
import { Image } from "../../../../core";
import styles from './styles.module.scss';

interface DetailProps extends ClassNameProps {
  src: string,
  title: string,
  content: string
}

const Detail: FC<DetailProps> = (props) => {
  const {content, src, title, className, ...restProps} = props;
  return (
    <div {...restProps} className={classList(styles.detail, className)}>
      <Image src={src} alt=""/>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Detail;
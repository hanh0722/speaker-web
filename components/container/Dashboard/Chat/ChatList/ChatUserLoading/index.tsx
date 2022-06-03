import React, { FC } from "react";
import PropTypes from 'prop-types';
import { ClassNameProps } from "../../../../../../types/string";
import { classList } from "../../../../../../utils/string";
import styles from './styles.module.scss';
import { SkeletonLoading } from "../../../../../core";

const ChatUserLoading: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div {...restProps} className={classList('d-flex align-center', styles.chat, className)}>
      <SkeletonLoading className={styles.img} variant="image" rounded/>
      <div className={styles.right}>
        <SkeletonLoading/>
        <SkeletonLoading/>
      </div>
    </div>
  )
};

ChatUserLoading.defaultProps = {
  className: ''
};

ChatUserLoading.propTypes = {
  className: PropTypes.string
}

export default ChatUserLoading;

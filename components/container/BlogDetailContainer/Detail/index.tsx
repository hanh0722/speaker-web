import React, { FC } from "react";
import PropTypes from 'prop-types';
import { BlogDetailProps } from "../../../../types/components/BlogDetail";
import { ParserElement } from "../../../common";
import styles from './styles.module.scss';
import { classList } from "../../../../utils/string";

const Detail: FC<BlogDetailProps> = (props) => {
  const { data, className } = props;
  const { description } = data;
  return (
    <>
      <ParserElement className={classList(`shadow-xs ${styles.description}`, className)} content={description}/>
    </>
  );
};

Detail.defaultProps = {
  className: '',
};

Detail.propTypes = {
  data: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default Detail;
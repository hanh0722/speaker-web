import React, { FC } from "react";
import PropTypes from 'prop-types';
import { GridProps, LoadingBlogGridProps } from "../../../types/component";
import { generateArray } from "../../../utils/array";
import { classList } from "../../../utils/string";
import { Grid } from "../../core";
import LoadingElement from "./LoadingElement";
import styles from './styles.module.scss';
import { DEFAULT_PAGE_SIZE } from "../../../constants/products";

const LoadingBlogGrid: FC<LoadingBlogGridProps> = (props) => {
  const { className, cols, numElement, ...restProps } = props;
  return (
    <Grid {...restProps} className={classList(styles.grid, className)} cols={cols || 3}>
      {generateArray(numElement || DEFAULT_PAGE_SIZE).map(item => {
        return <LoadingElement key={item}/>
      })}
    </Grid>
  )
};

LoadingBlogGrid.defaultProps = {
  className: '',
  cols: 3,
  numElement: DEFAULT_PAGE_SIZE
};

LoadingBlogGrid.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.number,
  numElement: PropTypes.number
};

export default LoadingBlogGrid;
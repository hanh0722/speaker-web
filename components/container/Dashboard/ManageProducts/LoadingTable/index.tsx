import React, { FC } from "react";
import PropTypes from 'prop-types';
import { LoadingTableManageProps } from "../../../../../types/components/Dashboard";
import { generateArray } from "../../../../../utils/array";
import { classList } from "../../../../../utils/string";
import { SkeletonLoading, Table } from "../../../../core";
import styles from "./styles.module.scss";

const LoadingTable: FC<LoadingTableManageProps> = (props) => {
  const { cols = 6, className, ...restProps } = props;
  return (
    <>
      {generateArray(cols).map((item) => {
        return (
          <Table.Row key={item}>
            {generateArray(cols).map((key) => {
              return (
                <Table.Cell key={key}>
                  <SkeletonLoading {...restProps} className={classList(styles.skeleton, className)} />
                </Table.Cell>
              );
            })}
          </Table.Row>
        );
      })}
    </>
  );
};

LoadingTable.defaultProps = {
  className: '',
  cols: 6
};

LoadingTable.propTypes = {
  cols: PropTypes.number,
  className: PropTypes.string
}

export default LoadingTable;

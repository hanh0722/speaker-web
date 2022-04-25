import React, { FC } from "react";
import PropTypes from 'prop-types';
import { ProductRowProps } from "../../../../../types/components/Dashboard";
import { classList, toCurrency } from "../../../../../utils/string";
import { getFullDate } from "../../../../../utils/time";
import { CheckBox } from "../../../../common";
import { Button, Image, Menu, Table } from "../../../../core";
import { IconThreeDot, IconTrash } from "../../../../core/Icons";
import IconEdit from "../../../../core/Icons/IconEdit";
import MenuItem from "../../../../core/Menu/MenuItem";
import StatusProduct from "./StatusProduct";
import styles from "./styles.module.scss";

const ProductRow: FC<ProductRowProps> = (props) => {
  const { product, className, onTick, ...restProps } = props;
  const onCheck = () => {
    if (onTick) {
      onTick(product._id);
    }
  }
  return (
    <Table.Row {...restProps} className={classList(styles.row, className)}>
      <Table.Cell>
        <CheckBox onChangeCheck={onCheck}/>
      </Table.Cell>
      <Table.Cell className={styles.title} align="start">
        <Image className={styles.image} src={product?.images[0]} alt=""/>
        {product.title}
      </Table.Cell>
      <Table.Cell align="start">
        {getFullDate(product.creation_time)}
      </Table.Cell>
      <Table.Cell>
        <StatusProduct quantity={product.stock_quantity} />
      </Table.Cell>
      <Table.Cell>{toCurrency(product.price)}</Table.Cell>
      <Table.Cell align="center">
        <Menu
          trigger={
            <Button
              variant="text"
              prefix="normal"
              color="inherit"
              className={styles.options}
            >
              <IconThreeDot />
            </Button>
          }
        >
          <MenuItem>
            <IconTrash /> Delete
          </MenuItem>
          <MenuItem>
            <IconEdit /> Edit
          </MenuItem>
        </Menu>
      </Table.Cell>
    </Table.Row>
  );
};

ProductRow.defaultProps = {
  product: undefined,
  className: '',
  onTick: (id) => {}
};

ProductRow.propTypes = {
  product: PropTypes.any.isRequired,
  className: PropTypes.string,
  onTick: PropTypes.func,
}
export default ProductRow;

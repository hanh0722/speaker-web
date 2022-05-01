import React, { FC } from "react";
import PropTypes from 'prop-types';
import { AddressItemProps } from "../../../../../types/components/AddressCheckout";
import { classList } from "../../../../../utils/string";
import { Button } from "../../../../core";
import styles from './styles.module.scss';
import { isFunction } from "../../../../../types/type";

const AddressItem: FC<AddressItemProps> = (props) => {
  const { className, data, onClick, ...restProps } = props;
  const { info } = data;
  const onHandleClick = () => {
    if (isFunction(onClick)) {
      onClick(data);
    }
  }
  return (
    <div {...restProps} className={classList(`d-flex align-end ${styles.address}`, className)}>
      <div className={styles.left}>
        <div className={`d-flex align-center ${styles.title}`}>
          <p className="weight-500">{info.full_name}</p>
          <span className={styles.des}>({info.place?.toLowerCase()})</span>
          {info.is_default && <span className={`f-12 lh-20 ${styles.default}`}>Default</span>}
        </div>
        <p className={styles.add}>{info.address}</p>
        <p className="color-gray">{info.phone_number}</p>
      </div>
      <Button onClick={onHandleClick} prefix="normal" size="small" variant="outlined" color="success">Deliver To This Address</Button>
    </div>
  )
};

AddressItem.defaultProps = {
  className: '',
  onClick: (item) => {}
};

AddressItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

export default AddressItem;
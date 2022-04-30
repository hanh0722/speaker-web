import React, { FC } from "react";
import PropTypes from 'prop-types';
import { CartPageProps } from "../../../types/components/Cart";
import BoxTotalCart from "./BoxTotalCart";
import StatisticCart from "./StatisticCart";
import styles from './styles.module.scss';

const CartPage: FC<CartPageProps> = (props) => {
  const { className, onClick, children, ...restProps } = props;
  return (
    <>
      <div {...restProps} className={`d-flex ${styles.statistic}`}>
        <StatisticCart />
        <BoxTotalCart onClick={onClick}/>
        {children}
      </div>
    </>
  );
};

CartPage.defaultProps = {
  onClick: () => {},
  className: '',
  children: undefined
};

CartPage.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
}

export default CartPage;

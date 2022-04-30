import React, { FC } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Image, SkeletonLoading, Table } from "../../../core";
import styles from "./styles.module.scss";
import { CartStoreState } from "../../../../store/slices/cart";
import { ClassNameProps } from "../../../../types/string";
import RowStatistic from "./RowStatistic";
import { classList } from "../../../../utils/string";
import LoadingTable from "../../../common/LoadingTable";

const StatisticCart: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  const { cart, totalProducts, isLoadingCart } = useSelector<
    RootState,
    CartStoreState
  >((state) => state.cart);
  return (
    <div
      {...restProps}
      className={classList("shadow-xs", styles.container, className)}
    >
      <div className={styles.table}>
        <div className={styles.cart}>
          <h4 className={`f-18 weight-500 ${styles.title}`}>
            {isLoadingCart ? (
              <SkeletonLoading className={styles.heading} />
            ) : (
              <>
                Cart{" "}
                <span className="f-16 weight-400 color-gray">
                  ({totalProducts} item)
                </span>
              </>
            )}
          </h4>
          <Table className={styles.table}>
            {!isLoadingCart && cart.length > 0 && (
              <Table.Head>
                <Table.Row>
                  <Table.Cell align="start">Product</Table.Cell>
                  <Table.Cell>Price</Table.Cell>
                  <Table.Cell>Quantity</Table.Cell>
                  <Table.Cell>Total Price</Table.Cell>
                  <Table.Cell />
                </Table.Row>
              </Table.Head>
            )}
            <Table.Body>
              {isLoadingCart && <LoadingTable cols={5} />}
              {!isLoadingCart &&
                cart?.map(({ productId, quantity }) => {
                  return (
                    <RowStatistic
                      quantity={quantity}
                      key={productId?._id}
                      data={productId}
                    />
                  );
                })}
            </Table.Body>
          </Table>
          {!isLoadingCart && cart.length === 0 && (
            <div
              className={`d-flex justify-center align-center flex-column ${styles.empty}`}
            >
              <Image src="/image/illustration_empty_cart.svg" alt="" />
              <div className={`text-center lh-32 ${styles["empty-block"]}`}>
                <p className="f-18 weight-500">Cart is empty</p>
                <p className="color-gray">
                  Look like you have no items in your shopping cart.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

StatisticCart.defaultProps = {
  className: "",
  children: undefined,
};

StatisticCart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default StatisticCart;

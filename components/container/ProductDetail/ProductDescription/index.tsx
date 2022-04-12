import React, { FC, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ProductDetailProps } from "../../../../types/components/ProductDetail";
import { classList, toCurrency } from "../../../../utils/string";
import { ButtonQuantity } from "../../../common";
import { Button, ParserElement, ToastNotification } from "../../../core";
import styles from "./styles.module.scss";
import ProductFooter from "../ProductFooter";
import { useAddCartService } from "../../../../hook/useCart";
import { RootState } from "../../../../store";

const ProductDescription: FC<ProductDetailProps> = (props) => {
  const quantityRef = useRef<HTMLInputElement>(null);
  const isMobileScreen = useSelector<RootState>(state => state.ui.isMobileScreen);
  const {
    isLoading,
    data: dataAddProduct,
    error,
    onAddItemToCart,
    onResetAsync,
  } = useAddCartService();
  const { className, data, ...restProps } = props;

  const onAddCart = () => {
    if (!data) {
      return;
    }
    const quantity = +(quantityRef.current?.value || 1);
    onAddItemToCart(data._id, quantity);
  };
  useEffect(() => {
    if (!isLoading && dataAddProduct && !error) {
      ToastNotification.success('Add Item Successfully', {
        position: isMobileScreen ? 'top-center' : 'top-right'
      });
    }
  }, [isLoading, dataAddProduct, error, isMobileScreen]);

  useEffect(() => {
    return () => {
      onResetAsync();
    }
  }, [onResetAsync]); 
  return (
    <div {...restProps} className={classList(styles.container, className)}>
      <div className={styles.header}>
        <p className={`f-16 weight-400 text-uppercase ${styles.brand}`}>
          Minimog
        </p>
        <h3 className="f-28 weight-400 lh-40">{data?.title}</h3>
        <div className={`d-flex align-center ${styles.price}`}>
          <span className={`${styles.discount} weight-500 f-16`}>
            {toCurrency(data?.discount_price)}
          </span>
          <span
            className={classList(
              `weight-500 ${styles.price}`,
              data?.discount_price && `f-14 color-gray ${styles.underline}`
            )}
          >
            {toCurrency(data?.price)}
          </span>
        </div>
      </div>
      <div className={styles["short-description"]}>
        <p className={`weight-400 f-16 ${styles.title}`}>Description:</p>
        <ParserElement
          className={styles.description}
          content={data!.description}
        />
      </div>
      <p className="weight-400 f-16">Quantity:</p>
      <div className={`d-flex align-center justify-between ${styles.cart}`}>
        <ButtonQuantity ref={quantityRef} className={styles.input} />
        <Button
          isLoading={isLoading}
          onClick={onAddCart}
          className={`weight-500 ${styles.btn}`}
          requiredAuth
          fullWidth
          variant="outlined"
          prefix="normal"
          color="inherit"
          size="large"
        >
          Add To Cart
        </Button>
      </div>
      <div className={styles.button}>
        <Button className="weight-500" requiredAuth fullWidth size="large">
          Buy it now
        </Button>
      </div>
      <ProductFooter className={styles.footer} productId={data?._id} />
    </div>
  );
};

ProductDescription.defaultProps = {
  data: undefined,
  className: "",
};

ProductDescription.propTypes = {
  data: PropTypes.any,
  className: PropTypes.string,
};

export default ProductDescription;

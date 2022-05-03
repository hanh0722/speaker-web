import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toCurrency } from "../../../utils/string";
import {
  Button,
  Grid,
  Link,
  Modal,
  ParserElement,
  SkeletonLoading,
} from "../../core";
import { ImageTransition, ButtonQuantity } from "../../common";
import styles from "./styles.module.scss";
import { QuickViewProductProps } from "../../../types/components/QuickViewProduct";
import { classList } from "../../../utils/string";
import { generateArray } from "../../../utils/array";
import { Alert } from "@mui/material";
import { useAddCartService } from "../../../hook/useCart";
import { RootState } from "../../../store";
import { PRODUCT_DETAIL } from "../../../constants/link";

const QuickViewProduct: FC<QuickViewProductProps> = (props) => {
  const isMobileScreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  const {
    isLoading: isLoadingAddCart,
    data: dataAddCart,
    error,
    onAddItemToCart,
    onResetAsync,
  } = useAddCartService();

  const { show, onHide, className, data, isLoading, ...restProps } = props;
  const quantityRef = useRef<HTMLInputElement>(null);

  const onAddItem = () => {
    const quantity = +(quantityRef.current?.value || 1);
    onAddItemToCart(data!.data._id, quantity);
  };

  useEffect(() => {
    if (!show) {
      onResetAsync();
    }
    return () => {
      onResetAsync();
    };
  }, [onResetAsync, show]);
  return (
    <Modal scrollable {...restProps} variant="lg" show={show} onHide={onHide}>
      <Modal.Body className={classList(styles.main, className)} closeBody>
        <Grid className={styles.body} cols={isMobileScreen ? 1 : 2}>
          <div className={styles.left}>
            {isLoading ? (
              <SkeletonLoading
                className={styles["image-loading"]}
                variant="image"
              />
            ) : (
              <ImageTransition
                className={styles.image}
                images={data?.data?.images}
              />
            )}
          </div>
          <div className={styles.right}>
            {isLoading ? (
              <div
                className={`d-flex flex-column align-center justify-center ${styles.loading}`}
              >
                {generateArray(6).map((item) => {
                  return (
                    <SkeletonLoading
                      className={styles.skeleton}
                      key={item}
                      variant="line"
                    />
                  );
                })}
              </div>
            ) : (
              <>
                <Link href={PRODUCT_DETAIL(data?.data?._id)}>
                  <h3 className="f-28 weight-400 lh-36">{data?.data?.title}</h3>
                </Link>
                <p className={styles.price}>{toCurrency(38)}</p>
                <ParserElement
                  className={styles.description}
                  content={data?.data?.description}
                />
                <Link className={styles.link} href={"/"}>
                  View Details
                </Link>
                <ButtonQuantity ref={quantityRef} />
                <Button
                  isLoading={isLoadingAddCart}
                  onClick={onAddItem}
                  fullWidth
                  size="medium"
                  className={styles.btn}
                >
                  Add To Cart
                </Button>
                {!isLoadingAddCart && (dataAddCart || error) && (
                  <Alert
                    className={styles.message}
                    severity={dataAddCart && !error ? "success" : "error"}
                  >
                    {error ? error : "Add to cart successfully"}
                  </Alert>
                )}
              </>
            )}
          </div>
        </Grid>
      </Modal.Body>
    </Modal>
  );
};

QuickViewProduct.defaultProps = {
  className: "",
  style: {},
};

QuickViewProduct.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default QuickViewProduct;

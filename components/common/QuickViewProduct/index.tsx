import React, { FC, useRef } from "react";
import PropTypes from "prop-types";
import { toCurrency } from "../../../utils/string";
import { Button, Grid, Link, Modal, SkeletonLoading } from "../../core";
import { ImageTransition, ButtonQuantity } from "../../common";
import styles from "./styles.module.scss";
import { QuickViewProductProps } from "../../../types/components/QuickViewProduct";
import { classList } from "../../../utils/string";
import { generateArray } from "../../../utils/array";

const QuickViewProduct: FC<QuickViewProductProps> = (props) => {
  const { show, onHide, className, data, isLoading, ...restProps } = props;
  const quantityRef = useRef<HTMLInputElement>(null);
  return (
    <Modal {...restProps} variant="lg" show={show} onHide={onHide}>
      <Modal.Body className={classList(styles.main, className)} closeBody>
        <Grid className={styles.body} cols={2}>
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
              <div className={`d-flex flex-column align-center justify-center ${styles.loading}`}>
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
                <Link href={"/"}>
                  <h3 className="f-28 weight-400 lh-36">{data?.data?.title}</h3>
                </Link>
                <p className={styles.price}>{toCurrency(38)}</p>
                <p className={`lh-20 ${styles.description}`}>
                  {data?.data?.description}
                </p>
                <Link className={styles.link} href={"/"}>
                  View Details
                </Link>
                <ButtonQuantity ref={quantityRef} />
                <Button fullWidth size="medium" className={styles.btn}>
                  Add To Cart
                </Button>
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

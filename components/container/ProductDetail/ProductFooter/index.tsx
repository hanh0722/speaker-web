import React, { FC, useState } from "react";
import PropTypes from "prop-types";
import { ProductFooterProps } from "../../../../types/components/ProductDetail";
import styles from "./styles.module.scss";
import { IconQuestion, IconShare, IconCompare } from "../../../core/Icons";
import { classList } from "../../../../utils/string";
import { Button } from "../../../core";
import useCallApi from "../../../../hook/useCallApi";
import { deleteCompareProduct, onCompareProduct } from "../../../../service/class/products";
import { BaseResponse } from "../../../../types/request";
const ProductFooter: FC<ProductFooterProps> = (props) => {
  const { productId, className, isCompare, ...restProps } = props;
  const [isCompared, setIsCompared] = useState(isCompare || false);

  const onHandleSuccess = (data: BaseResponse) => {
    setIsCompared(prevState => !prevState);
  };
  const onHandleRequest = () => {
    if (isCompared) {
      return deleteCompareProduct(productId!)
    }
    return onCompareProduct(productId!);
  }
  const { isLoading, onSendRequest } = useCallApi<BaseResponse>({
    request: onHandleRequest,
    onSuccess: onHandleSuccess,
  });
  return (
    <div {...restProps} className={classList(styles.footer, className)}>
      <Button
        requiredAuth
        onClick={onSendRequest}
        isActive={isCompared}
        isLoading={isLoading}
        size="large"
        variant="text"
        prefix="normal"
        color="inherit"
      >
        <IconCompare className="icon-append-left" />
        <span>Compare</span>
      </Button>
      <Button size="large" variant="text" prefix="normal" color="inherit">
        <IconQuestion className="icon-append-left" />
        <span>Ask a question</span>
      </Button>
      <Button size="large" variant="text" prefix="normal" color="inherit">
        <IconShare className="icon-append-left" />
        <span>Share</span>
      </Button>
    </div>
  );
};

ProductFooter.defaultProps = {
  className: "",
};

ProductFooter.propTypes = {
  productId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProductFooter;

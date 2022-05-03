import React, { FC, FormEvent, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { EditProductProps } from "../../../../types/components/EditProduct";
import {
  classList,
  isPositive,
  isRequired,
  isRequiredEditor,
} from "../../../../utils/string";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import useCallApi from "../../../../hook/useCallApi";
import { CreateProductState } from "../../../../types/components/CreateProduct";
import { editProduct } from "../../../../service/class/products";
import { BaseResponse } from "../../../../types/request";
import { MANAGE_PRODUCT } from "../../../../constants/path";
import { ToastNotification } from "../../../core";
import styles from './styles.module.scss';

const EditProduct: FC<EditProductProps> = (props) => {
  const { product, className, ...restProps } = props;
  const router = useRouter();
  const onHandleSuccess = async (_: BaseResponse) => {
    router.push(MANAGE_PRODUCT);
    ToastNotification.success('Edit Product Successfully');
  };
  const onHandleRequest = (params: CreateProductState) => {
    return editProduct(product._id, params);
  };
  const { isLoading, onSendRequest } = useCallApi({
    request: onHandleRequest,
    onSuccess: onHandleSuccess,
    isToastNotification: true,
  });
  const { title, description, images, price, stock_quantity } = product;
  const [stockQuantity, setStockQuantity] = useState<number | undefined>(
    stock_quantity
  );
  const [titleProduct, setTitleProduct] = useState<string>(title || "");
  const [descriptionProduct, setDescriptionProduct] = useState<string>(
    description || ""
  );
  const [imagesProduct, setImagesProduct] = useState<Array<string>>(
    images || []
  );
  const [regularPrice, setRegularPrice] = useState<number>(price);
  const [salePrice, setSalePrice] = useState<number | undefined>(
    product?.discount_price || undefined
  );

  const onChangeTitle = (value: string) => {
    setTitleProduct(value);
  };

  const onChangeDescription = (value: string) => {
    setDescriptionProduct(value);
  };
  const onChangeImages = (images: Array<string>) => {
    setImagesProduct(images);
  };
  const onChangeQuantity = (value: number) => {
    setStockQuantity(value);
  };
  const onChangePrice = (value: number) => {
    setRegularPrice(value);
  };
  const onChangeSalePrice = (value: number) => {
    setSalePrice(value);
  };

  const isValidSubmit = useMemo(() => {
    return (
      isRequiredEditor(descriptionProduct) &&
      isRequired(titleProduct) &&
      isPositive(regularPrice) &&
      imagesProduct.length > 0
    );
  }, [descriptionProduct, titleProduct, regularPrice, imagesProduct]);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!isValidSubmit) {
      return;
    }
    const request: CreateProductState = {
      description: descriptionProduct,
      images: imagesProduct,
      price: regularPrice,
      title: titleProduct,
      discount_price: salePrice,
      stock_quantity: stockQuantity
    };
    onSendRequest(request);
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      {...restProps}
      className={classList("d-flex", styles.container, className)}
    >
      <LeftBlock
        className={styles.left}
        onChangeDescription={onChangeDescription}
        onChangeTitle={onChangeTitle}
        product={product}
        onChangeImages={onChangeImages}
      />
      <RightBlock
        className={styles.right}
        onChangeSalePrice={onChangeSalePrice}
        onChangeRegularPrice={onChangePrice}
        onChangeQuantity={onChangeQuantity}
        product={product}
        isValid={isValidSubmit}
        isLoading={isLoading}
      />
    </form>
  );
};

EditProduct.defaultProps = {
  product: undefined,
  className: "",
};

EditProduct.propTypes = {
  product: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default EditProduct;

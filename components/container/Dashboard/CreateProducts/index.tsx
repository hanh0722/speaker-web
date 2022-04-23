import React, { FC, FormEvent, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ClassNameProps } from "../../../../types/string";
import { classList, isRequiredEditor } from "../../../../utils/string";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styles from "./styles.module.scss";
import { CreateProductState } from "../../../../types/components/CreateProduct";
import useCallApi from "../../../../hook/useCallApi";
import { createProduct } from "../../../../service/class/products";
import { ProductCreationResponse } from "../../../../types/request";
import Success from './Success';

const CreateProducts: FC<ClassNameProps> = (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [state, setState] = useState<CreateProductState>({
    description: undefined,
    images: [],
    price: undefined,
    title: undefined,
    discount_price: undefined,
    stock_quantity: undefined,
  });
  const { className, ...restProps } = props;

  const onHandleSubmit = async () => {
    const {
      description,
      images,
      price,
      title,
      discount_price,
      stock_quantity,
    } = state;
    return createProduct({
      description,
      images,
      price,
      title,
      discount_price: discount_price || undefined,
      stock_quantity: stock_quantity || undefined,
    });
  };
  const onHandleSuccess = (_: ProductCreationResponse) => {
    setIsOpenPopup(true);
  };
  const { isLoading, onSendRequest } = useCallApi({
    request: onHandleSubmit,
    onSuccess: onHandleSuccess,
    isToastNotification: true,
  });

  const isValidForm = useMemo(() => {
    const { title, description, price, images } = state;
    return !!(
      title &&
      isRequiredEditor(description) &&
      price !== undefined &&
      images.length > 0
    );
  }, [state]);
  const onChangeEditor = (value: string) => {
    setState((prevState) => ({
      ...prevState,
      description: value,
    }));
  };

  const onChangeTitle = (value: string) => {
    setState((prevState) => {
      return {
        ...prevState,
        title: value,
      };
    });
  };

  const onGetImages = (images: Array<string>) => {
    setState((prevState) => {
      return {
        ...prevState,
        images: images,
      };
    });
  };
  const onGetPrice = (price: number) => {
    setState((prevState) => ({
      ...prevState,
      price: price,
    }));
  };
  const onChangeQuantity = (quantity: number) => {
    setState((prevState) => ({
      ...prevState,
      stock_quantity: quantity,
    }));
  };
  const onChangeSalePrice = (salePrice: number) => {
    setState((prevState) => ({
      ...prevState,
      discount_price: salePrice,
    }));
  };
  const onSubmitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!isValidForm) {
      return;
    }
    onSendRequest();
  };
  const onHide = () => {
    setIsOpenPopup(false);
  }
  return (
    <>
      <Success show={isOpenPopup} onHide={onHide}/>
      <form
        {...restProps}
        onSubmit={onSubmitFormHandler}
        className={classList(
          "d-flex justify-between",
          styles.container,
          className
        )}
      >
        <LeftSide
          onGetImages={onGetImages}
          onChangeTitle={onChangeTitle}
          onChangeEditor={onChangeEditor}
          className={styles.create}
        />
        <RightSide
          isValid={isValidForm}
          onChangeSalePrice={onChangeSalePrice}
          onChangeQuantity={onChangeQuantity}
          onChangePrice={onGetPrice}
          className={`d-flex flex-column ${styles.option}`}
          isLoadingUpload={isLoading}
        />
      </form>
    </>
  );
};

CreateProducts.defaultProps = {
  className: "",
};

CreateProducts.propTypes = {
  className: PropTypes.string,
};

export default CreateProducts;

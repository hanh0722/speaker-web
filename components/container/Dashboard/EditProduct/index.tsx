import React, { FC } from "react";
import PropTypes from 'prop-types';
import { EditProductProps } from "../../../../types/components/EditProduct";
import { classList } from "../../../../utils/string";

const EditProduct: FC<EditProductProps> = (props) => {
  const { product, className } = props;
  return (
    <div className={classList(className)}>
      
    </div>
  )
};

EditProduct.defaultProps = {
  product: undefined,
  className: ''
};

EditProduct.propTypes = {
  product: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default EditProduct;
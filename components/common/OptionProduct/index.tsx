import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { QuickViewProduct } from "../../common";
import { OptionProductsProps } from "../../../types/component";
import { IconGroup } from "../../core";
import { IconEye, IconStar } from "../../core/Icons";
import IconCompare from "../../core/Icons/IconCompare";
import { useFetchProductById } from "../../../service/products";
import { TIME_TRANSITION_MODAL } from "../../../constants/base";

const OptionProduct: FC<OptionProductsProps> = (props) => {
  const [timeoutClose, setTimeoutClose] = useState<NodeJS.Timeout | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data, onFetchProduct, onResetAsync, error } =
    useFetchProductById();
  const { isActive, className, id, prefix, ...restProps } = props;
  const onOpenQuickView = () => {
    onFetchProduct(id);
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
    const timeout = setTimeout(() => {
      onResetAsync();
    }, TIME_TRANSITION_MODAL);
    setTimeoutClose(timeout);
  };
  useEffect(() => {
    return () => {
      if (timeoutClose) {
        clearTimeout(timeoutClose);
      }
    }
  }, [timeoutClose]);
  
  return (
    <>
      <QuickViewProduct data={data} isLoading={isLoading} show={isOpen} onHide={onClose} />
      <CSSTransition
        in={isActive}
        unmountOnExit
        mountOnEnter
        timeout={350}
        classNames={{
          enter: styles[`enter-${prefix}`],
          enterActive: styles[`enter-active-${prefix}`],
          exit: styles[`exit-${prefix}`],
          exitActive: styles[`exit-active-${prefix}`],
        }}
      >
        <IconGroup {...restProps} className={classList(className)}>
          <IconGroup.ElementIcon
            tooltip="Add Wishlist"
            iconName={IconStar}
          />
          <IconGroup.ElementIcon tooltip="Compare" iconName={IconCompare} />
          <IconGroup.ElementIcon
            onClick={onOpenQuickView}
            tooltip="Quick View"
            iconName={IconEye}
          />
        </IconGroup>
      </CSSTransition>
    </>
  );
};

OptionProduct.defaultProps = {
  prefix: "bottom",
  className: "",
};

OptionProduct.propTypes = {
  prefix: PropTypes.oneOf(["left", "right", "bottom", "top"]),
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default OptionProduct;

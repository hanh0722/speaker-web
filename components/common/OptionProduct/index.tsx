import React, { FC } from "react";
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";
import styles from './styles.module.scss';
import { classList } from "../../../utils/string";
import { OptionProductsProps } from "../../../types/component";
import { IconGroup } from "../../core";
import { IconEye, IconStar } from "../../core/Icons";
import IconCompare from "../../core/Icons/IconCompare";

const OptionProduct: FC<OptionProductsProps> = (props) => {
  const { isActive, className, prefix, ...restProps } = props;
  return (
    <>
      <CSSTransition in={isActive} unmountOnExit mountOnEnter timeout={350} classNames={{
        enter: styles[`enter-${prefix}`],
        enterActive: styles[`enter-active-${prefix}`],
        exit: styles[`exit-${prefix}`],
        exitActive: styles[`exit-active-${prefix}`]
      }}>
        <IconGroup {...restProps} className={classList(className)}>
          <IconGroup.ElementIcon
            tooltip="Add To Wishlist"
            iconName={IconStar}
          />
          <IconGroup.ElementIcon tooltip="Compare" iconName={IconCompare} />
          <IconGroup.ElementIcon tooltip="Quick View" iconName={IconEye} />
        </IconGroup>
      </CSSTransition>
    </>
  );
};

OptionProduct.defaultProps = {
  prefix: 'bottom',
  className: ''
}

OptionProduct.propTypes = {
  prefix: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string
}

export default OptionProduct;

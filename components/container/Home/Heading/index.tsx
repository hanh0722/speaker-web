import React, { FC } from "react";
import PropTypes from 'prop-types';
import { HeadingProps } from "../../../../types/components/PremiumLanding";
import { classList } from "../../../../utils/string";
import styles from "./styles.module.scss";

const Heading: FC<HeadingProps> = (props) => {
  const { subtitle, title, isCenter, className, ...restProps} = props;
  return (
    <div {...restProps} className={classList(isCenter && 'text-center', styles.heading, className)}>
      <p className={`text-uppercase f-15 lh-24 weight-500`}>
        {subtitle}
      </p>
      <h3 className="f-40 weight-500 lh-48">{title}</h3>
    </div>
  );
};

Heading.defaultProps = {
  isCenter: true,
  className: '',
}

Heading.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCenter: PropTypes.bool,
  className: PropTypes.string
}
export default Heading;

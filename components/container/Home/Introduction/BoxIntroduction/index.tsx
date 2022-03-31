import React, { FC } from "react";
import PropTypes from 'prop-types';
import { classList } from "../../../../../utils/string";
import { BoxIntroductionProps } from "../../../../../types/components/BoxIntroduction";
import { Image } from "../../../../core";
import styles from "./styles.module.scss";

const BoxIntroduction: FC<BoxIntroductionProps> = (props) => {
  const { description, path, title, children, className} = props;
  return (
    <div className={classList(`text-start ${styles.box}`, className)}>
      <div className={styles.image}>
        <Image src={path} alt="" />
      </div>
      <h5 className="f-20 lh-32 weight-500">{title}</h5>
      <p className="lh-24">
        {description}
      </p>
      {children}
    </div>
  );
};

BoxIntroduction.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default BoxIntroduction;

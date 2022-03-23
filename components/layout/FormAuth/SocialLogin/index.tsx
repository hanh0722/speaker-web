import React, { FC } from "react";
import PropTypes from 'prop-types';
import { classList } from "../../../../utils/string";
import { SocialLoginProps } from "../../../../types/component";
import { IconFacebook, IconGoogle } from "../../../core/Icons";
import styles from "./styles.module.scss";

const SocialLogin: FC<SocialLoginProps> = (props) => {
  const {className, children, isHiddenTitle, titleFacebook, titleGoogle} = props;
  return (
    <div
      className={classList(`d-flex flex-column align-center justify-center ${styles.container}`, className)}
    >
      {!isHiddenTitle && <div className={styles.title}>
        <span></span>
        <span className="f-16 text-capitalize">Or sign in with</span>
        <span></span>
      </div>}
      <div className="d-flex justify-center align-center gap-16 container-social">
        <div className={`${styles.icon} icon-component`}>
          <IconFacebook variant="xl" />
          {titleFacebook && <span>{titleFacebook}</span>}
        </div>
        <div className={`${styles.icon} icon-component`}>
          <IconGoogle variant="xl" />
          {titleGoogle && <span>{titleGoogle}</span>}
        </div>
        {children}
      </div>
    </div>
  );
};

SocialLogin.defaultProps = {
  isHiddenTitle: false,
  children: null,
  className: ''
};

SocialLogin.propTypes = {
  isHiddenTitle: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

export default SocialLogin;

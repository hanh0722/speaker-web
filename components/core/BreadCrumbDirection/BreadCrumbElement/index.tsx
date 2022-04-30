import React, { FC } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { BreadCrumbElementProps } from "../../../../types/components/BreadCrumb";
import { classList } from "../../../../utils/string";
import { IconCaretLightRight } from "../../Icons";
import Link from "../../Link";
import styles from "./styles.module.scss";

const BreadCrumbElement: FC<BreadCrumbElementProps> = (props) => {
  const { pathname } = useRouter();
  const { children, className, showCaret = true, href, ...restProps } = props;
  return (
    <Link activeClassname={styles.active} className={styles.caret} href={href}>
      <p {...restProps} className={classList(styles.element, className)}>
        {children}
      </p>
      {showCaret && pathname !== href && (
        <IconCaretLightRight variant="xs" className={styles.icon} />
      )}
    </Link>
  );
};

BreadCrumbElement.defaultProps = {
  className: "",
  showCaret: true,
};

BreadCrumbElement.propTypes = {
  className: PropTypes.string,
  showCaret: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

export default BreadCrumbElement;

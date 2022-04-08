import React, { FC } from "react";
import { BreadCrumbDirection } from "../../../types/components/BreadCrumb";
import { classList } from "../../../utils/string";
import BreadCrumbElement from "./BreadCrumbElement";
import styles from "./styles.module.scss";

const BreadCrumbDirection: FC<BreadCrumbDirection> = (props) => {
  const { children, title, className, ...restProps } = props;
  return (
    <>
      <div {...restProps} className={classList('text-center', styles.breadcrumb, className)}>
        {title && <h4 className="f-36 lh-48 weight-500">{title}</h4>}
        <div className="d-flex justify-center align-center">{children}</div>
      </div>
    </>
  );
};

export default Object.assign(BreadCrumbDirection, {
  Element: BreadCrumbElement,
});

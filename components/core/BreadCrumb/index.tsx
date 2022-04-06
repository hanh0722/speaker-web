import React, { FC } from "react";
import { BreadCrumbProps } from "../../../types/components/BreadCrumb";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const BreadCrumb: FC<BreadCrumbProps> = (props) => {
  const { className, description, title } = props;
  return (
    <div className={classList('text-center', styles.breadcrumb, className)}>
      {title && <h3 className="f-32 lh-48 weight-500">{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  )
}

export default BreadCrumb;
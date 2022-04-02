import React, { FC } from "react";
import { BoxIntroductionProps } from "../../../../../types/components/PremiumLanding";
import { classList } from "../../../../../utils/string";
import styles from './styles.module.scss';

const Introduction: FC<BoxIntroductionProps> = (props) => {
  const { description, iconName: IconComponent, title, children, ...restProps} = props;
  return (
    <div {...restProps} className={classList(`d-flex ${styles.box}`, )}>
      <IconComponent variant="unset"/>
      <div className={styles.content}>
        <h4 className="f-24 lh-40 weight-500">{title}</h4>
        <p className="color-gray lh-24">{description}</p>
      </div>
      {children}
    </div>
  )
}

export default Introduction;
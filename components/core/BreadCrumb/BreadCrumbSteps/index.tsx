import React, { FC } from "react";
import { BreadCrumbStepsProps } from "../../../../types/components/BreadCrumb";
import { classList } from "../../../../utils/string";
import { BreadCrumbStepsProvider } from "./BreadCrumbStepsContext";
import BreadCrumbStepsElement from "./BreadCrumbStepsElement";
import styles from "./styles.module.scss";

const BreadCrumbSteps: FC<BreadCrumbStepsProps> = (props) => {
  const { className, children } = props;
  return (
    <BreadCrumbStepsProvider>
      <div className={classList("d-flex align-center", className)}>
        {React.Children.map(children, (child, index) => {
          if (index + 1 < React.Children.count(children)) {
            return (
              <>
                {child}
                <div className={styles.line} />
              </>
            );
          }
          return child;
        })}
      </div>
    </BreadCrumbStepsProvider>
  );
};

export default Object.assign(BreadCrumbSteps, {
  Element: BreadCrumbStepsElement,
});

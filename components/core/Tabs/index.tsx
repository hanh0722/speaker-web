import React, { FC } from "react";
import { TabMainProps } from "../../../types/components/Tabs";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import Tab from "./Tab";
import TabContainer from "./TabContainer";
import TabTransition from "./TabTransition";

const Tabs: FC<TabMainProps> = (props) => {
  const { children, className, defaultActiveKey, ...restProps } = props;

  return (
    <TabContainer defaultActiveKey={defaultActiveKey} {...restProps}>
      <div className={classList('d-flex align-center',styles.tabs, className)}>
        {children}
        {/* <TabTransition/> */}
      </div>
    </TabContainer>
  );
};

export default Object.assign(Tabs, {
  Element: Tab,
});

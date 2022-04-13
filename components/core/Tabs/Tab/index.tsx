import React, { FC, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { TabContext } from "../TabContext";
import styles from "../styles.module.scss";
import { classList } from "../../../../utils/string";
import { TabProps } from "../../../../types/components/Tabs";

const Tab: FC<TabProps> = (props) => {
  const {
    className,
    children,
    eventKey,
    as: Component = "div",
    ...restProps
  } = props;
  const tabRef = useRef<HTMLElement>(null);
  const TabCtx = useContext(TabContext);
  const onActiveKey = () => {
    TabCtx.onChangeKey(eventKey);
  };
  useEffect(() => {
    if (TabCtx.activeKey === eventKey && tabRef.current) {
      TabCtx.onSetPosition(tabRef.current.getBoundingClientRect());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TabCtx.activeKey, eventKey]);
  return (
    <Component
      ref={tabRef}
      onClick={onActiveKey}
      {...restProps}
      className={classList(styles.tab, TabCtx.activeKey === eventKey ? styles.active : '')}
    >
      {children}
    </Component>
  );
};

Tab.defaultProps = {
  className: "",
  as: "div",
};

Tab.propTypes = {
  className: PropTypes.string,
  eventKey: PropTypes.any.isRequired,
  as: PropTypes.any,
};
export default Tab;

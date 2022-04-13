import React, { FC } from "react";
import PropTypes from 'prop-types';
import { TabContainerProps } from "../../../../types/components/Tabs";
import { TabContextProvider } from "../TabContext";

const TabContainer: FC<TabContainerProps> = (props) => {
  const { children, defaultActiveKey, onSelect, ...restProps } = props;
  return (
    <TabContextProvider {...restProps} onSelect={onSelect || undefined} defaultActiveKey={defaultActiveKey}>
      {children}
    </TabContextProvider>
  )
};

TabContainer.defaultProps = {
  defaultActiveKey: undefined,
  onSelect: (value) => {}
};

TabContainer.propTypes = {
  defaultActiveKey: PropTypes.any,
  onSelect: PropTypes.func
}
export default TabContainer;
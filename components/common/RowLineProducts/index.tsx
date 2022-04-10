import React, { FC, PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { ROW_LINE_DEFAULT } from "../../../constants/row";
import { RootState } from "../../../store";
import { RowLineElement, RowLineProductsProps, RowLineState } from "../../../types/components/RowLineProducts";
import { classList } from "../../../utils/string";
import { IconGroup } from "../../core";
import styles from "./styles.module.scss";

class RowLineProducts extends PureComponent<
  RowLineProductsProps,
  RowLineState
> {

  static defaultProps = {
    activeId: 3,
  }

  static propTypes = {
    activeId: PropTypes.number
  }
  constructor(props: RowLineProductsProps) {
    super(props);
    this.state = {
      activeId: this.props?.activeId || 3,
    };
  }
  _onChange = (item: RowLineElement) => {
    this.props.onChange(item);
    this.setState({ activeId: item.id })
  }
  render(): React.ReactNode {
    const { activeId } = this.state;
    const { isMobileScreen, className } = this.props;
    return (
      <IconGroup className={classList(styles.group, className)}>
        {ROW_LINE_DEFAULT.map((item) => {
          const { isMobile, icon: IconComponent, id, tooltip} = item as RowLineElement;
          if (isMobileScreen && isMobile) {
            return null;
          }
          return (
            <IconGroup.ElementIcon
              className={classList(activeId === id && styles.active)}
              key={id}
              iconName={IconComponent}
              tooltip={tooltip}
              onClick={() => this._onChange(item)}
            />
          );
        })}
      </IconGroup>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isMobileScreen: state.ui.isMobileScreen,
  };
};

export default connect(mapStateToProps, null)(RowLineProducts);

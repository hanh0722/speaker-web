import React, { FC, useContext } from "react";
import PropTypes from 'prop-types';
import { TagElementProps } from "../../../../types/components/InputSelect";
import { classList } from "../../../../utils/string";
import { IconClose } from "../../Icons";
import { InputSelectContext } from "../InputSelectContext";
import styles from './styles.module.scss';

const TagElement: FC<TagElementProps> = (props) => {
  const { className, children, id, ...restProps } = props;
  const { onDeleteTag } = useContext(InputSelectContext);

  const onDeleteTagHandler = () => {
    onDeleteTag(id);
  }
  return (
    <div {...restProps} className={classList(styles.element, className)}>
      {children}
      <span onClick={onDeleteTagHandler} className={`d-flex justify-center align-center ${styles.close}`}>
        <IconClose variant="sm"/>
      </span>
    </div>
  );
};

TagElement.defaultProps = {
  className: '',
  children: undefined,
};

TagElement.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default TagElement;
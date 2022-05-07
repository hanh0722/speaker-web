import React, {
  ChangeEvent,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import styles from "./styles.module.scss";
import ScrollView from "../../common/ScrollView";
import { InputSelectProps } from "../../../types/components/InputSelect";
import Element from "./Element";
import { InputSelectContext } from "./InputSelectContext";
import TagElement from "./TagElement";
import { isFunction } from "../../../types/type";
import usePrevious from "../../../hook/usePrevious";
import { CSSTransition } from "react-transition-group";
import useDropdown from "../../../hook/useDropdown";

const InputSelect: FC<InputSelectProps> = (props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { isToggle, onChangeToggle } = useDropdown(elementRef);
  const { tag } = useContext(InputSelectContext);
  const { placeholder, titleList, children, show, onGetValue, ...restProps } =
    props;
  const [value, setValue] = useState("");
  const tags = usePrevious(tag);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value;
    setValue(valueInput);
    if (isFunction(onGetValue)) {
      onGetValue(valueInput);
    }
  };

  useEffect(() => {
    if (tags && tags !== tag) {
      setValue("");
    }
  }, [tags, tag]);

  return (
    <div className={styles.container}>
      <div
        onClick={onChangeToggle}
        ref={elementRef}
        className={`d-flex flex-wrap gap-8 ${styles.box}`}
      >
        {tag?.map((item) => {
          return (
            <TagElement id={item.id} key={item.id}>
              {item.value}
            </TagElement>
          );
        })}
        <Input
          placeholder={placeholder}
          value={value}
          className={styles.input}
          onChange={onChangeHandler}
        />
      </div>
      <CSSTransition
        in={isToggle}
        unmountOnExit
        mountOnEnter
        timeout={350}
        classNames="fade-up"
      >
        <div className={`shadow-xs ${styles.list}`}>
          <ScrollView className={styles.scrollView} scrollable>
            <ScrollView.Header className="weight-500 f-16">
              {titleList}
            </ScrollView.Header>
            <ScrollView.Body className={styles.body}>
              {children}
            </ScrollView.Body>
          </ScrollView>
        </div>
      </CSSTransition>
    </div>
  );
};

InputSelect.defaultProps = {
  titleList: "",
  className: "",
};

InputSelect.propTypes = {
  titleList: PropTypes.string,
  className: PropTypes.string,
};

export default Object.assign(InputSelect, {
  Item: Element,
});

import React, { useState, forwardRef } from "react";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import EditorToolbar, { modules, formats } from "./Toolbar";
import "react-quill/dist/quill.snow.css";
import { isClient } from "../../../utils/server";
import styles from "./styles.module.scss";
import { EditorProps } from "../../../types/components/Editor";
import { classList } from "../../../utils/string";

export const Editor = forwardRef<ReactQuill, EditorProps>((props, ref) => {
  const { onChange, className, initialValue, ...restProps } = props;
  const [state, setState] = useState<string>(initialValue || "");
  const handleChange = (value: string) => {
    setState(value);
    if (onChange) {
      onChange(value);
    }
  };
  if (!isClient()) {
    return null;
  }
  return (
    <div className={classList(className)}>
      <EditorToolbar />
      <ReactQuill
        ref={ref}
        className={styles.quill}
        theme="snow"
        value={state}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        {...restProps}
      />
    </div>
  );
});

Editor.displayName = "Editor";

Editor.propTypes = {
  onChange: PropTypes.func,
};

export default Editor;

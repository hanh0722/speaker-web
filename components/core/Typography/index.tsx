import React, { FC } from "react";
import PropTypes from "prop-types";
import { TypographyProps } from "../../../types/components/Typography";
import { classList } from "../../../utils/string";

const Typography: FC<TypographyProps> = (props) => {
  const {
    children,
    className,
    size,
    variant: Component = "div",
    weight,
    ...restProps
  } = props;
  return (
    <Component
      {...restProps}
      className={classList(
        `typo-${Component.toString()}`,
        weight && `typo-${weight}`,
        size && `typo-${size}`,
        className
      )}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  className: "",
  size: "md",
  variant: "div",
  weight: 400,
};

Typography.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.any,
  weight: PropTypes.oneOf([400, 500, 600, 700, "bold"]),
};
export default Typography;

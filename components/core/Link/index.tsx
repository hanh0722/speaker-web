import React, { FC } from "react";
import LinkComponent from "next/link";
import PropTypes from "prop-types";
import { LinkProps } from "../../../types/component";
import { urlIsInternal } from "../../../utils/url";
import { classList } from "../../../utils/string";

const Link: FC<LinkProps> = (props) => {
  const { href, blank, children, className, onClick } = props;
  if (blank || !urlIsInternal(href as string)) {
    return (
      <a
        href={href as string}
        className={classList(className)}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  return href ? (
    <LinkComponent {...props} href={href} passHref={true}>
      <a className={classList(className)}>{children}</a>
    </LinkComponent>
  ) : (
    <div onClick={onClick}>{children}</div>
  );
};

Link.displayName = "Link";
Link.defaultProps = {
  href: "",
  onClick: () => {},
};

Link.propTypes = {
  href: PropTypes.any,
  onClick: PropTypes.func,
};

export default Link;

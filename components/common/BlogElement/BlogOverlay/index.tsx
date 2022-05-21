import React, { FC } from "react";
import PropTypes from "prop-types";
import { BlogOverlayProps } from "../../../../types/components/BlogComponent";
import { Image, Link } from "../../../core";
import styles from "../styles.module.scss";
import { classList } from "../../../../utils/string";
import { getTimeWithMonthName } from "../../../../utils/time";
import { EDIT_BLOG, HOME } from "../../../../constants/path";

const BlogOverlay: FC<BlogOverlayProps> = (props) => {
  const { className, data, url,  ...restProps } = props;
  return (
    <div {...restProps} className={classList(styles.element, className)}>
      <Link href={url || EDIT_BLOG(data._id)}>
        <div className={styles.image}>
          <Image src={data?.cover_url || ''} alt=""/>
        </div>
        <div className={styles.description}>
          <p className={`f-12 color-white ${styles.date}`}>{getTimeWithMonthName(data.creation_time)}</p>
          <p className={styles.title}>
            {data?.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

BlogOverlay.defaultProps = {
  className: "",
};

BlogOverlay.propTypes = {
  className: PropTypes.string,
};

export default BlogOverlay;

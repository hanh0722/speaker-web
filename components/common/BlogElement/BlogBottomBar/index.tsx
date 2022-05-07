import React, { FC } from "react";
import PropTypes from "prop-types";
import { BlogBottomBarProps } from "../../../../types/components/BlogComponent";
import { classList } from "../../../../utils/string";
import styles from "../styles.module.scss";
import { Image, Link } from "../../../core";
import { EDIT_BLOG } from "../../../../constants/path";
import { getTimeWithMonthName } from "../../../../utils/time";

const BlogBottomBar: FC<BlogBottomBarProps> = (props) => {
  const { className, data } = props;
  return (
    <div className={classList(styles.element, className)}>
      <Link href={EDIT_BLOG(data?._id)}>
        <div className={`${styles.image} ${styles.bottom}`}>
          <Image src={data?.cover_url} alt="" />
        </div>
        <div className={`${styles.description} ${styles["main-desc"]}`}>
          <div className={styles.user}>
            <Image src="/default-image.png" />
          </div>
          <p className={`f-12 color-white ${styles.date}`}>{getTimeWithMonthName(data?.creation_time)}</p>
          <p className={styles.title}>
            {data?.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

BlogBottomBar.defaultProps = {
  className: "",
};

BlogBottomBar.propTypes = {
  className: PropTypes.string,
};

export default BlogBottomBar;

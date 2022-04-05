import React, { FC } from "react";
import { Link } from "../../core";
import { Collection, CollectionItem } from "../../../types/api/page/collections";
import { classList } from "../../../utils/string";
import { Image } from "../../core";
import styles from "./styles.module.scss";

const Collection: FC<CollectionItem> = (props) => {
  const { collection, className, ...restProps } = props;
  return (
    <Link href={'/'}>
    <div {...restProps} className={classList("text-center", styles.collection, className)}>
      <div className={styles.image}>
        <Image src={collection?.image_url || "/image/default-collection.svg"} alt="" />
      </div>
      <p className="weight-500 text-uppercase f-18">{collection?.title}</p>
    </div>
    </Link>
  );
};

export default Collection;

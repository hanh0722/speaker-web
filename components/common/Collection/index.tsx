import React, { FC } from "react";
import { Link } from "../../core";
import {
  Collection,
  CollectionItem,
} from "../../../types/api/page/collections";
import { classList } from "../../../utils/string";
import ImageTransition from "../ImageTransition";
import styles from "./styles.module.scss";
import { PRODUCT } from "../../../constants/path";

const Collection: FC<CollectionItem> = (props) => {
  const { collection, className, ...restProps } = props;
  return (
    <Link href={`${PRODUCT}/${collection.seo_id}`}>
      <div
        {...restProps}
        className={classList("text-center", styles.collection, className)}
      >
        <ImageTransition
          className={styles.image}
          images={collection?.image_url}
        />
        <p className="weight-500 text-uppercase f-16">{collection?.title}</p>
      </div>
    </Link>
  );
};

export default Collection;

import React, { FC } from "react";
import PropTypes from "prop-types";
import { CollectionItem } from "../../../../../types/api/page/collections";
import { Link } from "../../../../core";
import styles from "./styles.module.scss";
import { ImageTransition } from "../../../../common";
import { EDIT_COLLECTION } from "../../../../../constants/path";
import { getFullDate } from "../../../../../utils/time";

const CollectionsElement: FC<CollectionItem> = (props) => {
  const { collection } = props;
  return (
    <div className={styles.collection}>
      <Link href={EDIT_COLLECTION(collection._id)}>
        <div className={styles.image}>
          <ImageTransition images={collection?.image_url} />
        </div>
      </Link>
      <div className={styles.content}>
        <Link href={EDIT_COLLECTION(collection._id)}>{collection?.title}</Link>
        <div className={`d-flex justify-end align-center ${styles.price}`}>
          <p className="weight-500">
            Created At: {getFullDate(collection.creation_time)}
          </p>
        </div>
      </div>
    </div>
  );
};

CollectionsElement.propTypes = {
  collection: PropTypes.any.isRequired,
};

export default CollectionsElement;

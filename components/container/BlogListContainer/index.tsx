import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BlogListContainerProps } from "../../../types/components/BlogList";
import { BlogDetailResponse, BlogResponse } from "../../../types/request";
import BlogElement from "../../common/BlogElement";
import { Grid, Pagination } from "../../core";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import useCallApi from "../../../hook/useCallApi";
import { getBlogByParams } from "../../../service/blog";
import { CREATION_TIME } from "../../../constants/request";
import usePrevious from "../../../hook/usePrevious";
import { LoadingBlogGrid } from "../../common";
import { DETAIL_BLOG } from "../../../constants/path";

const BlogListContainer: FC<BlogListContainerProps> = (props) => {
  const { blogs, total } = props;
  const router = useRouter();
  const page = +(router.query["page"] || 1);
  const [blogsList, setBlogsList] = useState<Array<BlogDetailResponse>>(
    blogs || []
  );
  const [totalBlogs, setTotalBlogs] = useState<number>(total || 0);
  const previous = usePrevious(page);

  const onFetchBlogHandler = () => {
    return getBlogByParams({
      page: page,
      page_size: 1,
      sort: "desc",
      key: CREATION_TIME,
    });
  };

  const onHandleSuccess = (data: BlogResponse) => {
    setBlogsList(data.data);
    setTotalBlogs(data.total);
  };
  const { isLoading, onSendRequest } = useCallApi({
    request: onFetchBlogHandler,
    onSuccess: onHandleSuccess,
    isToastNotification: true,
  });
  useEffect(() => {
    if (previous !== page && previous) {
      onSendRequest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, previous]);

  return (
    <>
      {isLoading ? (
        <LoadingBlogGrid />
      ) : (
        <Grid className={styles.grid} cols={4}>
          {blogsList.map((item, index) => {
            if (index < 3) {
              return (
                <BlogElement.Overlay
                  url={DETAIL_BLOG(item._id)}
                  className={styles.element}
                  data={item}
                  key={item._id}
                />
              );
            }
            return <BlogElement.BottomBar url={DETAIL_BLOG(item._id)} data={item} key={item._id} />;
          })}
        </Grid>
      )}
      <Pagination itemPerPage={1} totalItems={totalBlogs} />
    </>
  );
};

BlogListContainer.propTypes = {
  blogs: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};
export default BlogListContainer;

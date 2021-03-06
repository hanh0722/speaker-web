import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CREATE_BLOGS } from "../../../../constants/path";
import { DEFAULT_PAGE_SIZE } from "../../../../constants/products";
import { CREATION_TIME } from "../../../../constants/request";
import { PER_PAGE_DEFAULT } from "../../../../constants/sort";
import useCallApi from "../../../../hook/useCallApi";
import { getBlogByParams } from "../../../../service/blog";
import {
  BaseSortRequest,
  BlogDetailResponse,
  BlogResponse,
} from "../../../../types/request";
import { isArray } from "../../../../utils/array";
import { isNumber } from "../../../../utils/string";
import { LoadingBlogGrid } from "../../../common";
import BlogElement from "../../../common/BlogElement";
import { Button, Grid, Link, Pagination } from "../../../core";
import styles from "./styles.module.scss";

const ManageBlogs = () => {
  const router = useRouter();
  const [total, setTotal] = useState<null | number>(null);
  const [blogs, setBlogs] = useState<null | Array<BlogDetailResponse>>(null);
  const page = +(router.query["page"] || 1);
  const onFetchBlog = (params?: BaseSortRequest) => {
    return getBlogByParams(params);
  };
  const onSuccessFetchBlog = (data: BlogResponse) => {
    const { data: dataBlogs, total } = data;
    setTotal(total);
    setBlogs(dataBlogs);
  };
  const { isLoading, onSendRequest } = useCallApi<
    BlogResponse,
    BaseSortRequest
  >({
    request: onFetchBlog,
    onSuccess: onSuccessFetchBlog,
    isToastNotification: true,
  });
  useEffect(() => {
    onSendRequest({
      page: page,
      page_size: DEFAULT_PAGE_SIZE,
      sort: "desc",
      key: CREATION_TIME,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      {isLoading ? (
        <LoadingBlogGrid />
      ) : (
        isArray(blogs) &&
        blogs?.length > 0 && (
          <Grid className={styles.grid} cols={3}>
            {blogs.map((item, index) => {
              if (index < 3) {
                return (
                  <BlogElement.Overlay
                    className={styles.element}
                    data={item}
                    key={item._id}
                  />
                );
              }
              return <BlogElement.BottomBar data={item} key={item._id} />;
            })}
          </Grid>
        )
      )}
      {blogs?.length === 0 && (
        <div className={`text-center ${styles.container}`}>
          <p>You {"haven't"} created any blogs, create now?</p>
          <Link href={CREATE_BLOGS}>
            <Button variant="outlined" prefix="normal" color="inherit">
              Create Blog
            </Button>
          </Link>
        </div>
      )}
      {isNumber(total) && total > 0 && (
        <Pagination totalItems={total} itemPerPage={PER_PAGE_DEFAULT} />
      )}
    </>
  );
};

export default ManageBlogs;

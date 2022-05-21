import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import { HeadGeneral } from "../../components/common";
import BlogListContainer from "../../components/container/BlogListContainer";
import { Container } from "../../components/core";
import BreadCrumbDirection from "../../components/core/BreadCrumbDirection";
import { MainLayout } from "../../components/layout";
import { BLOGS, HOME } from "../../constants/path";
import { DEFAULT_PAGE_SIZE } from "../../constants/products";
import { CREATION_TIME } from "../../constants/request";
import { getBlogByParams } from "../../service/blog";
import { NextPageWithLayout } from "../../types/layout";

const BlogsList: NextPageWithLayout = ({ blogs, total }: any) => {
  return (
    <>
      <HeadGeneral title="Blogs" />
      <Container>
        <BreadCrumbDirection>
          <BreadCrumbDirection.Element href={HOME}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={BLOGS}>
            Blogs
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <BlogListContainer blogs={blogs} total={total} />
      </Container>
    </>
  );
};

BlogsList.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const page = +(query["page"] || 1);
  const token = req.cookies["token"];

  try {
    const response = await getBlogByParams(
      {
        page: page,
        page_size: 1,
        key: CREATION_TIME,
        sort: "desc",
      },
      {
        authorization: "Bearer " + token,
      }
    );
    return {
      props: {
        blogs: response.data?.data,
        total: response?.data?.total,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default BlogsList;

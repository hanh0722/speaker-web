import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../components/common";
import BreadCrumbDirection from "../../../components/core/BreadCrumbDirection";
import { MainLayout } from "../../../components/layout";
import { BLOGS, DETAIL_BLOG, HOME } from "../../../constants/path";
import { getBlogById, getBlogByParams } from "../../../service/blog";
import { NextPageWithLayout } from "../../../types/layout";
import { BlogDetailResponse } from "../../../types/request";
import BlogDetailContainer from "../../../components/container/BlogDetailContainer";

const BlogDetail: NextPageWithLayout = ({data}: any) => {
  const { title, _id  } = data as BlogDetailResponse;
  return (
    <>
      <HeadGeneral title={title}/>
      <BreadCrumbDirection>
        <BreadCrumbDirection.Element href={HOME}>Home</BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element href={BLOGS}>Blogs</BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element showCaret={false} href={DETAIL_BLOG(_id)}>{title}</BreadCrumbDirection.Element>
      </BreadCrumbDirection>
      <BlogDetailContainer data={data}/>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  try{
    const blogId = params?.['id'] as string;
    if (!blogId) {
      return {
        notFound: true
      }
    };

    const blog = await getBlogById(blogId);
    const data = blog.data.data;
    return {
      props: {
        data: data
      }
    }
  }catch(err) {
    return {
      notFound: true
    }
  }
}
BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}

export default BlogDetail;
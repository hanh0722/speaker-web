import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import { HeadGeneral } from "../../components/common";
import MainLayout from "../../components/layout/MainLayout";
import { TITLE } from "../../constants/request";
import { getCollections } from "../../service/class/collections";
import { NextPageWithLayout } from "../../types/layout";
import { ListCollections } from "../../components/container/Collection";
import { Container } from "../../components/core";

const Collections: NextPageWithLayout = ({
  data,
  total_collections,
  total_page,
}: any) => {
  return (
    <>
      <HeadGeneral title="Shop" />
      <Container>
        <ListCollections data={data} />
      </Container>
    </>
  );
};

Collections.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const page = query["page"];
  try {
    const response = await getCollections({
      page: page ? +page : 1,
      page_size: 5,
      key: TITLE,
      sort: "asc",
    });
    if (response.status >= 400 || response.data?.code >= 400) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data: response.data?.data,
        total_collections: response.data?.total_collections,
        total_page: response?.data?.total_page,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Collections;
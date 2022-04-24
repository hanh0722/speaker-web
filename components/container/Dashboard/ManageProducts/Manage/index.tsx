import React, { ChangeEvent, useEffect, useState } from "react";
import { CheckBox } from "../../../../common";
import { Input, Pagination, Table, ToastNotification } from "../../../../core";
import { IconSearch } from "../../../../core/Icons";
import styles from "./styles.module.scss";
import { useFetchProducts } from "../../../../../service/products";
import { useRouter } from "next/router";
import ProductRow from "../ProductRow";
import LoadingTable from "../LoadingTable";
import { BaseProductProps } from "../../../../../types/request";
import { CREATION_TIME } from "../../../../../constants/request";

const Manage = () => {
  const { data, error, isLoading, onFetchProductsByParams, onResetAsync } = useFetchProducts();
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();
  const page = router.query['page'];
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (page && +page !== 1) {
      router.push(`?page=1`, undefined, {
        shallow: true,
        scroll: false
      })
    }
    setIsTyping(true);
    setQuery(event.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
      setLoaded(true);
      onFetchProductsByParams({
        page: page ? +page : 1,
        query: 'title',
        value: query,
        sort: 'desc',
        key: CREATION_TIME
      })
    }, 300);
    return () => {
      clearTimeout(timeout);
    }
  }, [onFetchProductsByParams, page, query]);

  useEffect(() => {
    if (!isLoading && error) {
      ToastNotification.error(error)
    }
  }, [isLoading, error]);

  useEffect(() => {
    return () => {
      onResetAsync();
    }
  }, [onResetAsync]);
  return (
    <div className={styles.container}>
      <Input
        iconName={IconSearch}
        label="Search product..."
        onChange={onChangeInput}
      />
      <div className={styles.table}>
        <Table className={styles['table-core']}>
          <Table.Head>
            <Table.Row className={styles.heading}>
              <Table.Cell><CheckBox/></Table.Cell>
              <Table.Cell align="start">Product</Table.Cell>
              <Table.Cell align="start">Create At</Table.Cell>
              <Table.Cell>Status</Table.Cell>
              <Table.Cell>Price</Table.Cell>
              <Table.Cell>Settings</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {(isLoading || isTyping || !loaded) && <LoadingTable cols={6}/>}
            {!isLoading && data && !isTyping && data?.data?.map((item: BaseProductProps) => {
              return <ProductRow product={item} key={item._id}/>
            })}
          </Table.Body>
        </Table>
      </div>
      {!isLoading && data && <Pagination className={styles.pagination} itemPerPage={5} totalItems={data?.total_products}/>}
    </div>
  );
};

export default Manage;

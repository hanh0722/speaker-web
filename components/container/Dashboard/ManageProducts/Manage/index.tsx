import React, { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import { CheckBox } from "../../../../common";
import {
  Button,
  Input,
  Pagination,
  Table,
  ToastNotification,
} from "../../../../core";
import { IconSearch, IconTrash } from "../../../../core/Icons";
import styles from "./styles.module.scss";
import { useFetchProducts } from "../../../../../service/products";
import { useRouter } from "next/router";
import ProductRow from "../ProductRow";
import LoadingTable from "../../../../common/LoadingTable";
import {
  BaseProductProps,
  DeleteProductsResponse,
} from "../../../../../types/request";
import { CREATION_TIME } from "../../../../../constants/request";
import { generateArray, isArray } from "../../../../../utils/array";
import useCallApi from "../../../../../hook/useCallApi";
import { deleteProducts } from "../../../../../service/class/products";
import { Alert } from "@mui/material";

const Manage = () => {
  const { data, error, isLoading, onFetchProductsByParams, onResetAsync } =
    useFetchProducts();
  const [loaded, setLoaded] = useState(false);
  const [listProducts, setListProducts] = useState<
    undefined | Array<BaseProductProps>
  >();
  const [listTicked, setListTicked] = useState<Array<string>>([]);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();
  const page = router.query["page"];

  const onHandleSuccess = (data: DeleteProductsResponse) => {
    const { items } = data;
    if (isArray(items)) {
      const filterList = listProducts?.filter((item) => {
        return !items.includes(item._id);
      });
      setListProducts(filterList);
    } else {
      const filterState = listProducts!.filter((item) => {
        return item._id !== items;
      });
      setListProducts(filterState);
    }
    setListTicked([]);
  };
  const onHandleDelete = (id: string | Array<string> | undefined) => {
    if (!id) {
      return;
    }
    return deleteProducts(id);
  };
  const { isLoading: isLoadingDelete, onSendRequest } =
    useCallApi<DeleteProductsResponse>({
      isToastNotification: true,
      // @ts-ignore
      request: onHandleDelete,
      onSuccess: onHandleSuccess,
    });
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (page && +page !== 1) {
      router.push(`?page=1`, undefined, {
        shallow: true,
        scroll: false,
      });
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
        query: "title",
        value: query,
        sort: "desc",
        key: CREATION_TIME,
        page_size: 5,
      });
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [onFetchProductsByParams, page, query]);

  useEffect(() => {
    if (!isLoading && error) {
      ToastNotification.error(error);
    }
    if (!isLoading && data) {
      setListProducts(data?.data);
    }
  }, [isLoading, error, data]);

  useEffect(() => {
    return () => {
      onResetAsync();
    };
  }, [onResetAsync]);

  const onTickHandler = (id: string) => {
    const isTicked = listTicked.some((value) => value === id);
    if (isTicked) {
      const filterTicked = listTicked.filter((item) => item !== id);
      return setListTicked(filterTicked);
    }
    return setListTicked((prevState) => [...prevState, id]);
  };

  const onDelete = (_?: MouseEvent<HTMLButtonElement>, id?: string) => {
    onSendRequest(id || listTicked);
  };
  return (
    <div className={styles.container}>
      <Input
        iconName={IconSearch}
        label="Search product..."
        onChange={onChangeInput}
      />
      <div className={styles.table}>
        <Table className={styles["table-core"]}>
          <Table.Head>
            {listTicked.length > 0 ? (
              <Table.Row
                className={`d-flex align-center justify-between w-100 ${styles.delete}`}
              >
                <Table.Cell />
                <Table.Cell>{listTicked.length} Selected</Table.Cell>
                {generateArray(3).map((item) => (
                  <Table.Cell key={item} />
                ))}
                <Table.Cell>
                  <Button
                    isLoading={isLoadingDelete}
                    onClick={onDelete}
                    className={styles.btn}
                    variant="text"
                    prefix="normal"
                    color="inherit"
                  >
                    <IconTrash />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ) : (
              <Table.Row className={styles.heading}>
                <Table.Cell>
                  <CheckBox />
                </Table.Cell>
                <Table.Cell align="start">Product</Table.Cell>
                <Table.Cell align="start">Create At</Table.Cell>
                <Table.Cell>Status</Table.Cell>
                <Table.Cell>Price</Table.Cell>
                <Table.Cell>Settings</Table.Cell>
              </Table.Row>
            )}
          </Table.Head>
          <Table.Body>
            {(isLoading || isTyping || !loaded) && <LoadingTable cols={6} />}
            {!isLoading &&
              listProducts &&
              !isTyping &&
              listProducts?.map((item: BaseProductProps) => {
                return (
                  <ProductRow
                    onTick={onTickHandler}
                    product={item}
                    key={item._id}
                    onDelete={onDelete}
                  />
                );
              })}
          </Table.Body>
        </Table>
        {!isLoading && !isTyping && listProducts?.length === 0 && (
          <Alert className={`justify-center ${styles.warning}`} severity="warning">
            No products match with keyword {`"${query}"`}
          </Alert>
        )}
      </div>
      {!isLoading && data && listProducts && listProducts?.length > 0 && (
        <Pagination
          className={styles.pagination}
          itemPerPage={5}
          totalItems={data?.total_products}
        />
      )}
    </div>
  );
};

export default Manage;

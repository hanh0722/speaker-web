import React, { ChangeEvent, FC, useEffect, useState } from "react";
import querystring from "query-string";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import { SearchFieldProps } from "../../../../types/component";
import styles from "./styles.module.scss";
import { classList } from "../../../../utils/string";
import Modal from "../../Modal";
import { Container, Image, Input } from "../../../core";
import { IconCart, IconClose, IconPeople, IconStar } from "../../../core/Icons";
import { RootState } from "../../../../store";
import { IconSearch } from "../../../core/Icons";
import { isClient } from "../../../../utils/server";
import SearchResult from "./SearchResult";
import { useFetchProducts } from "../../../../service/products";
import { CREATION_TIME, TITLE } from "../../../../constants/request";

const SearchField: FC<SearchFieldProps> = (props) => {
  const { data, isLoading, error, onFetchProductsByParams, onResetAsync } =
    useFetchProducts();
  const router = useRouter();
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState<null | string>(null);
  const isMobileSCreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  const { className, onClick, isOpenSearchField } = props;

  useEffect(() => {
    if (value === null) {
      setIsTyping(false);
      return;
    }
    const timeout = setTimeout(() => {
      setIsTyping(false);
      onFetchProductsByParams({
        page_size: 5,
        sort: -1,
        key: CREATION_TIME,
        query: TITLE,
        value: value,
      });
    }, 500);

    return () => {
      setIsTyping(true);
      onResetAsync();
      clearTimeout(timeout);
    };
  }, [value, router, onFetchProductsByParams, onResetAsync]);

  useEffect(() => {
    let timeout: any;
    if (!isOpenSearchField) {
      timeout = setTimeout(() => {
        setValue(null);
        // router.push("", undefined, {
        //   shallow: true,
        // });
      }, 500)
    }
    return () => {
      clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenSearchField]);

  if (!isClient()) {
    return null;
  }
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const trimResult = event.target.value.trim();
    // const query = querystring.stringify({
    //   ...router.query,
    //   q: trimResult,
    // });
    // router.push(`?${query}`, undefined, {
    //   shallow: true,
    // });
    setValue(trimResult);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <CSSTransition
          in={isOpenSearchField}
          unmountOnExit
          mountOnEnter
          classNames="fade-down"
          timeout={300}
        >
          <>
            <div className={classList(styles.search, className)}>
              <Container className={`w-100 h-100 ${styles.container}`}>
                {isMobileSCreen && (
                  <div
                    className={`f-14 weight-500 text-capitalize d-flex justify-between align-center ${styles.title}`}
                  >
                    Search our store
                    <span onClick={onClick}>
                      <IconClose variant="lg" />
                    </span>
                  </div>
                )}
                <div
                  className={`d-flex justify-between align-center ${styles["search-field"]}`}
                >
                  {!isMobileSCreen && (
                    <Image className={styles.logo} src="/logo.webp" alt="" />
                  )}
                  <div className={styles.field}>
                    <Input
                      className={styles.input}
                      label="Search Products"
                      placeholder="Search Products"
                      iconName={IconSearch}
                      onChange={onSearchChange}
                    />
                  </div>
                  {!isMobileSCreen && (
                    <ul className={`d-flex gap-20 ${styles.icons}`}>
                      <li>
                        <IconPeople variant="lg" />
                      </li>
                      <li>
                        <IconStar variant="lg" />
                      </li>
                      <li>
                        <IconCart variant="lg" />
                      </li>
                    </ul>
                  )}
                </div>
                {value !== null && <SearchResult
                  value={value}
                  isLoading={isLoading}
                  isTyping={isTyping}
                  data={data?.data}
                  total_products={data?.total_products}
                />}
              </Container>
            </div>
            <Modal onClick={onClick} />
          </>
        </CSSTransition>,
        document.getElementById("destination")!
      )}
    </>
  );
};

export default SearchField;

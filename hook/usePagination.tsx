import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import querystring from 'query-string';
import { PaginationHook } from "../types/components/Pagination";
import { DEFAULT_SHOW_PAGINATION, PAGE_DEFAULT } from "../constants/sort";
import { generateArrayByRange } from "../utils/array";

const usePagination = ({ itemPerPage, totalItems, numberPagination = DEFAULT_SHOW_PAGINATION }: PaginationHook) => {
  const router = useRouter();
  const page = router.query['page'];
  const [pageCurrent, setPageCurrent] = useState(page ? +page : 1);

  const getQuery = (numberChange: number) => {
    const query = router.query;
    const queryParsed = querystring.stringify({
      ...query,
      page: pageCurrent + numberChange
    });
    return queryParsed;
  }
  const numPage = useMemo(() => {
    return Math.ceil(totalItems / (itemPerPage || PAGE_DEFAULT));
  }, [totalItems, itemPerPage]);

  const onIncrementPage = () => {
    if (pageCurrent >= numPage) {
      return;
    }
    const queryParsed = getQuery(1);
    router.push(`?${queryParsed}`, undefined, {
      shallow: true,
      scroll: false
    })
    setPageCurrent(prevState => prevState + 1);
  }

  const onDecrementPage = () => {
    if (pageCurrent <= 1) {
      return;
    }
    const queryParsed = getQuery(-1);
    router.push(`?${queryParsed}`, undefined, {
      shallow: true,
      scroll: false
    });
    setPageCurrent(prevState => prevState - 1);
  }

  const onSetPage = (page: number) => {
    setPageCurrent(page);
  }

  const getPagination = useMemo(() => {
    const paginationIsMatched = numPage > numberPagination;
    if (!paginationIsMatched) {
      return generateArrayByRange(1, numPage);
    }
    if (pageCurrent === numPage) {
      return generateArrayByRange(pageCurrent - numberPagination + 1, pageCurrent);
    } else if (pageCurrent === 1) {
      return generateArrayByRange(1, numberPagination);
    }
    return generateArrayByRange(pageCurrent - 1, pageCurrent + 1);

  }, [pageCurrent, numPage, numberPagination]);

  const isFirstPage = useMemo(() => {
    return pageCurrent === 1;
  }, [pageCurrent])
  
  const isLastPage = useMemo(() => {
    return pageCurrent === numPage;
  }, [pageCurrent, numPage]);

  return {
    onDecrementPage,
    onIncrementPage,
    pageCurrent,
    getPagination,
    isFirstPage,
    isLastPage,
    onSetPage
  }
};

export default usePagination;
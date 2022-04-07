import { useCallback } from "react";
import { PAGE_DEFAULT, PER_PAGE_DEFAULT } from "../constants/sort";
import useFetch from "../hook/useFetch"
import { BaseSortRequest, CollectionResponse } from "../types/request";
import { BASE_URL } from "../utils/config";

const BASE_COLLECTION_URL = `${BASE_URL}/api/collections`

export const useCollections = () => {
  const { isLoading, data, error, request, onResetAsync } = useFetch<CollectionResponse>();
  const onFetchCollections = useCallback(async ({sort, key, page_size = PER_PAGE_DEFAULT, page = PAGE_DEFAULT}: BaseSortRequest) => {
    request({
    url: `${BASE_COLLECTION_URL}/get`,
     params: {
       sort,
       key,
       page_size,
       page
     }
    })
  }, [request]);
  return {
    isLoading,
    data,
    error,
    onFetchCollections,
    onResetAsync
  }
};
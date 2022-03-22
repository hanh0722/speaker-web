import { Reducer, useCallback, useReducer } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ErrorProps, ObjectProps } from "../types/base";
import { HttpConfig, UseFetchActions, UseFetchSerialize, UseFetchState } from "../types/hook";
import { RootState } from "../store";
import { BaseResponse } from "../types/request";

const initialState: UseFetchState<BaseResponse, BaseResponse> = {
    isLoading: false,
    error: null,
    data: null
}

const reducerFetchingFunction = <T extends BaseResponse, U extends BaseResponse>(state: UseFetchState<T, U>, action: UseFetchActions) => {
    switch(action.type) {
        case UseFetchSerialize.ISLOADING: 
            return {
                ...state,
                isLoading: true
            }
        case UseFetchSerialize.ERROR: 
            return {
                ...state,
                error: action.payload as U,
                isLoading: false
            }
        case UseFetchSerialize.SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload as T
            }
        case UseFetchSerialize.RESET:
            return {
                ...initialState
            }
        default:
            return state;
    }
}
const useFetch = <T extends ObjectProps>() => {
    const [state, dispatch] = useReducer(reducerFetchingFunction, initialState);
    const token = useSelector<RootState>(state => state.user.token);

    const request = useCallback(async ({url, data, headers, method, params}: HttpConfig) => {
        try{
            dispatch({
                type: UseFetchSerialize.ISLOADING
            })
            const response = await axios({
                url: url,
                method: method || "GET",
                params: {
                    ...params
                },
                headers: {
                    ...headers,
                    Authorization: 'Bearer ' + (token ? token : '')
                },
                data: {
                    ...data
                }
            });
            if (response.status >= 400 || response.data?.code >= 400) {
                const error: ErrorProps = new Error(response?.data?.message || "Server Internal Error");
                error.code = response?.status || response?.data?.code || 500;
                throw error;
            }
            dispatch({
                type: UseFetchSerialize.SUCCESS,
                payload: response.data as T
            })
        }catch(err: any) {
            dispatch({
                type: UseFetchSerialize.ERROR,
                payload: {
                    message: err?.response?.data?.message || err?.message || "Server Internal Error",
                    code: err?.code || err?.data?.code || err?.response?.status || 500
                }
            })
        }
    }, [token]);
    const onResetAsync = useCallback(() => {
        dispatch({
            type: UseFetchSerialize.RESET,
        });
    }, []);
    return {
        ...state,
        request,
        onResetAsync
    }
}

export default useFetch;
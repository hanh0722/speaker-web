import { Method } from "axios";
import { ObjectProps } from "./base";
import { BaseResponse } from "./request";

export interface UseInputState {
    isTouched: boolean,
    value: string
}

export enum UseInputSerialize {
    CHANGE, TOUCHED, CHECK_VALID
}

export enum UseFetchSerialize {
    ISLOADING, SUCCESS, ERROR, RESET
}

export interface UseInputActions {
    type: string | UseInputSerialize;
    payload: any
}

export interface ServerMessageResponse {
    message: string,
    code: number | string
}

export interface UseFetchState<T extends ObjectProps, U extends ObjectProps> {
    isLoading: boolean,
    data?: null | T,
    error?: null | string | U
}

export interface UseFetchActions {
    type: UseFetchSerialize,
    payload?: any
};

export interface HttpConfig {
    method?: Method,
    url: string,
    params?: ObjectProps,
    headers?: ObjectProps,
    data?: ObjectProps
}

export interface UseInputParams {
    type?: 'or' | 'and',
    args: Array<(value: string) => boolean>
}
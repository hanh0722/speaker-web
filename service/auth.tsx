import { BASE_URL } from "../utils/config";
import useFetch from "../hook/useFetch";
import { useCallback } from "react";
import { BaseResponse } from "../types/request";

const AUTH_URL = `${BASE_URL}/api/auth`;

const useRegister = () => {
    const {isLoading, data, error, request, onResetAsync} = useFetch<BaseResponse>();

    const onRegister = useCallback((name: string, username: string, password: string) => {
        request({
            url: `${AUTH_URL}/register`,
            method: 'POST',
            data: {
                username,
                password, 
                name
            }
        })
    }, [request]);
    return {
        onRegister,
        isLoading,
        data,
        error,
        onResetAsync
    }
}

export {
    useRegister
}
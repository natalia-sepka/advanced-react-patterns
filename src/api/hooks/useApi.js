import { useState } from "react";
import { useApiStatus } from "./useApiStatus";
import { ERROR, PENDING, SUCCESS } from "../../constants/api-status";

export function useApi(fn, config = {}) {
    const { initialData } = config;
    const [data, setData] = useState();
    const [error, setError] = useState();
    const { status, setStatus, ...normalisedStatuses } = useApiStatus();

    const exec = async (...args) => {
        try{
            setStatus(PENDING);
            const responseData = await fn(...args);
            setData(responseData);
            setStatus(SUCCESS);

            return {
                data: responseData,
                error: null
            };
        } catch (err) {
            setError(err);
            setStatus(ERROR);

            return {
                data: null,
                error
            };
        }
    };
    return {
        data,
        setData,
        status,
        setStatus,
        exec,
        ...normalisedStatuses
    };
}
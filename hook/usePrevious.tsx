import { useEffect, useRef } from "react";

const usePrevious = (value: any) => {
    const valueRef = useRef(0);
    useEffect(() => {
        valueRef.current = value;
    }, [value]);
    
    return valueRef.current;
}

export default usePrevious;
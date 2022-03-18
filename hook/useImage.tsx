import { useState } from "react";
import { DEFAULT_IMAGE } from "../constants/string";

const useImage = (url: string) => {
   const [srcImage, setSrcImage] = useState<string | null>(url);
   const [isLoading, setIsLoading] = useState(true);

    const onHandleErrorImage = () => {
        setSrcImage(DEFAULT_IMAGE);
    }

    const onLoadImage = () => {
        setSrcImage(url);
        setIsLoading(false);
    };

    return {
        srcImage,
        onLoadImage,
        onHandleErrorImage,
        isLoading
    }
}

export default useImage;
import { useState, SyntheticEvent, useCallback, useEffect } from "react";
import { DEFAULT_IMAGE } from "../constants/string";
import usePrevious from "./usePrevious";

const useImage = (url: string) => {
  const [srcImage, setSrcImage] = useState<string | null>(url);
  const previousURL = usePrevious(url);
  const [isLoading, setIsLoading] = useState(true);

  const onHandleErrorImage = () => {
    setSrcImage(DEFAULT_IMAGE);
  };

  useEffect(() => {
    if (previousURL !== url && previousURL) {
      setSrcImage(url);
    }
  }, [previousURL, url]);

  const onLoadImage = (event: SyntheticEvent<HTMLImageElement>) => {
    if (srcImage === DEFAULT_IMAGE) {
      setIsLoading(false);
      return;
    }
    const { currentTarget, target } = event as SyntheticEvent<HTMLImageElement>;
    setSrcImage(url);
    setIsLoading(false);
  };

  const onCalculateImage = useCallback((): {width: number, height: number} => {
    const image = new Image();
    image.src = url;
    return {
      width: image.width,
      height: image.height,
    };
  }, [url]);

  return {
    srcImage,
    onLoadImage,
    onHandleErrorImage,
    isLoading,
    onCalculateImage,
  };
};

export default useImage;

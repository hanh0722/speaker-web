import { useState, SyntheticEvent, useCallback } from "react";
import { DEFAULT_IMAGE } from "../constants/string";

const useImage = (url: string) => {
  const [imageProprety, setImageProperty] = useState({});
  const [srcImage, setSrcImage] = useState<string | null>(url);
  const [isLoading, setIsLoading] = useState(true);

  const onHandleErrorImage = () => {
    setSrcImage(DEFAULT_IMAGE);
  };

  const onLoadImage = (event: SyntheticEvent<HTMLImageElement>) => {
    if (srcImage === DEFAULT_IMAGE) {
      setIsLoading(false);
      return;
    }
    const { currentTarget } = event as SyntheticEvent<HTMLImageElement>;
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

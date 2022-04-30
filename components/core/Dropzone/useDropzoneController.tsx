import { RefObject, useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import { FileWithPath, useDropzone } from "react-dropzone";
import { DropzoneProps } from "../../../types/components/Dropzone";
import useCallApi from "../../../hook/useCallApi";
import { uploadFile } from "../../../service/upload";
import { FileResponse, FileReponseBasic } from "../../../types/request";

interface DropzoneController extends DropzoneProps {
  ref: RefObject<HTMLInputElement>;
  initFiles?: Array<FilePath>
}

export interface FilePath {
  file: FileWithPath | string;
  id: string;
  isLoading: boolean;
}

const useDropzoneController = (props: DropzoneController) => {
  const { ref, options, onGetFile, initFiles, ...restProps } = props;
  const [urls, setUrls] = useState<FileReponseBasic | null>(null);
  const [files, setFiles] = useState<Array<FilePath>>(initFiles || []);

  const onGetNameFile = (array: Array<FilePath>) => {
    return array.map(item => item.file);
  }
  const onFinishedLoading = useCallback(() => {
    let index = 0;
    if (!urls) {
      return;
    }
    const mapFiles = files.map((item) => {
      if (item.isLoading) {
        const setUrlObject = {
          ...item,
          file: urls[index],
          isLoading: false
        };
        index++;
        return {
          ...setUrlObject,
        };
      }
      return {
        ...item,
        isLoading: false,
      };
    });
    setUrls(null);
    setFiles(mapFiles);
  }, [files, urls]);

  const onHandleError = () => {
    const removeFiles = files.filter(item => !item.isLoading);
    setFiles(removeFiles);
  };

  const onHandleUploadFile = (params: Array<FileWithPath>) => {
    return uploadFile(params as Array<File>);
  };


  const onHandleurls = (data: FileResponse) => {
    const mapURL = onGetNameFile(files) as Array<string>;
    const mergeFiles = [...mapURL, ...data.urls];
    if (onGetFile) {
      onGetFile(mergeFiles);
    }
    setUrls(data.urls);
  };
  const { isLoading, onSendRequest } = useCallApi<FileResponse>({
    request: onHandleUploadFile,
    onSuccess: onHandleurls,
    onError: onHandleError,
    isToastNotification: true
  });

  useEffect(() => {
    if (urls && !isLoading) {
      onFinishedLoading();
    }
  }, [urls, isLoading, onFinishedLoading]);

  const onGetFileDrop = (file: Array<FileWithPath>) => {
    const addKeyToFiles: Array<FilePath> = file.map((item) => {
      return {
        file: item,
        id: v4(),
        isLoading: true,
      };
    });
    setFiles((prevState) => {
      return [...prevState, ...addKeyToFiles];
    });
    onSendRequest(file);
  };
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 10,
    onDrop: onGetFileDrop,
    ...(options || {}),
  });

  const onOpenFile = () => {
    ref.current?.click();
  };

  const onFilterFile = (id: string) => {
    const filterImage = files.filter((item) => {
      return item.id !== id;
    });
    if (onGetFile) {
      onGetFile(onGetNameFile(filterImage) as Array<string>);
    }
    setFiles(filterImage);
  };

  const onClearFile = () => {
    setFiles([]);
    if (onGetFile) {
      onGetFile([]);
    }
    setUrls(null);
  };

  return {
    onOpenFile,
    getRootProps,
    getInputProps,
    files,
    onFilterFile,
    onClearFile,
    onSendRequest,
    isLoading
  };
};

export default useDropzoneController;

import { RefObject, useState } from "react";
import { v4 } from "uuid";
import { FileWithPath, useDropzone } from "react-dropzone";
import { DropzoneProps } from "../../../types/components/Dropzone";
import useCallApi from "../../../hook/useCallApi";
import { uploadFile } from "../../../service/upload";
import { isFile } from "../../../utils/string";

interface DropzoneController extends DropzoneProps {
  ref: RefObject<HTMLInputElement>;
}

interface FilePath {
  file: FileWithPath | string;
  id: string;
  isLoading: boolean;
}

const useDropzoneController = (props: DropzoneController) => {
  const [files, setFiles] = useState<Array<FilePath>>([]);
  const { ref, options, onGetFile, ...restProps } = props;

  const getFileNotUploaded = () => {
    const filterFile = files.filter((item) => {
      return isFile(item.file);
    });
    return filterFile;
  };
  const getFile = () => {
    const filterFile = getFileNotUploaded();
    return filterFile.map(item => item.file);
  }
  const onHandleUploadFile = () => {
    const fileNotUploaded = getFileNotUploaded();
    const fileNeedUpload = getFile() as Array<File>;
    if (fileNotUploaded.length === 0) {
      return;
    };
    const setLoadingFiles: Array<FilePath> = files.map(item => {
      const isIncluded = fileNotUploaded.some(value => value.id === item.id);
      return {
        file: item.file,
        id: item.id,
        isLoading: isIncluded
      }
    });
    
    return uploadFile(fileNeedUpload);
  };
  const onHandleSuccess = (data: any) => {
    console.log(data);
  };
  const { isLoading, onSendRequest } = useCallApi({
    request: onHandleUploadFile,
    onSuccess: onHandleSuccess,
  });

  const onGetFileDrop = (file: Array<FileWithPath>) => {
    const addKeyToFiles: Array<FilePath> = file.map((item) => {
      return {
        file: item,
        id: v4(),
        isLoading: false,
      };
    });
    setFiles((prevState) => {
      return [...prevState, ...addKeyToFiles];
    });
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
    setFiles(filterImage);
  };

  const onClearFile = () => {
    setFiles([]);
  };

  return {
    onOpenFile,
    getRootProps,
    getInputProps,
    files,
    onFilterFile,
    onClearFile,
    onSendRequest
  };
};

export default useDropzoneController;

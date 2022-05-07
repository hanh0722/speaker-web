import { useRouter } from "next/router";
import React, { FC, FormEvent, useMemo, useState } from "react";
import { MANAGE_BLOGS } from "../../../../constants/path";
import { MANAGE } from "../../../../constants/type";
import useCallApi from "../../../../hook/useCallApi";
import { createBlog } from "../../../../service/blog";
import { BaseResponse, CreateBlogRequest } from "../../../../types/request";
import { ClassNameProps } from "../../../../types/string";
import {
  classList,
  isRequired,
  isRequiredEditor,
} from "../../../../utils/string";
import { ToastNotification } from "../../../core";
import LeftBlog from "./LeftBlog";
import RightBlog from "./RightBlog";
import styles from "./styles.module.scss";

const CreateBlog: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  const router = useRouter();
  const [isPublish, setIsPublish] = useState(true);
  const [description, setDescription] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");
  const [shortDesc, setShortDesc] = useState<string>("");
  const [title, setTitle] = useState("");
  const [isComment, setIsComment] = useState(true);
  const [metaTitle, setMetaTitle] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);

  const onRequest = (data: CreateBlogRequest) => {
    return createBlog(data);
  }
  const onSuccess = (_: BaseResponse) => {
    ToastNotification.success('Create Blog Successfully');
    router.push(MANAGE_BLOGS);
  };
  const { isLoading, onSendRequest } = useCallApi<BaseResponse>({
    request: onRequest,
    isToastNotification: true,
    onSuccess: onSuccess
  })

  const onChangeDescription = (value: string) => {
    setDescription(value);
  };
  const onGetImage = (path: string) => {
    setImageURL(path);
  };

  const onChangeTitle = (value: string) => {
    setTitle(value);
  };

  const onChangeShortDesc = (value: string) => {
    setShortDesc(value);
  };

  const onChangePublishStatus = (status: boolean) => {
    setIsPublish(status);
  };

  const onChangeCommentStatus = (status: boolean) => {
    setIsComment(status);
  };
  const onChangeTags = (tags: Array<string>) => {
    setTags(tags);
  };

  const isValidForm = useMemo(() => {
    return (
      isRequiredEditor(description) &&
      isRequired(title) &&
      isRequired(shortDesc) &&
      !!imageURL
    );
  }, [description, title, shortDesc, imageURL]);

  const onChangeMetaTitle = (value: string) => {
    setMetaTitle(value);
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidForm) {
      return;
    }
    const submitBlog = new CreateBlogRequest(title, shortDesc, description, imageURL, isComment, isPublish, metaTitle, tags);
    onSendRequest(submitBlog);
  };


  return (
    <form
      {...restProps}
      onSubmit={onSubmitHandler}
      className={classList("d-flex", styles.container, className)}
    >
      <LeftBlog
        onGetTitle={onChangeTitle}
        onGetShortDesc={onChangeShortDesc}
        onGetImage={onGetImage}
        onChange={onChangeDescription}
      />
      <RightBlog
        isValid={isValidForm}
        onChangeTags={onChangeTags}
        onChangeCommentStatus={onChangeCommentStatus}
        onChangePublishStatus={onChangePublishStatus}
        onChangeTitleMeta={onChangeMetaTitle}
        isLoading={isLoading}
      />
    </form>
  );
};

export default CreateBlog;

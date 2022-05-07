import React, { ChangeEvent, FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { RightBlogProps } from "../../../../../types/components/Dashboard";
import { classList } from "../../../../../utils/string";
import { ButtonToggle } from "../../../../common";
import { Button, Input, InputSelect, LoadingCore } from "../../../../core";
import styles from "./styles.module.scss";
import { isFunction } from "../../../../../types/type";
import useCallApi from "../../../../../hook/useCallApi";
import { getSuggestTagBlog } from "../../../../../service/blog";
import { GetSuggestCreateResponse } from "../../../../../types/request";
import { Alert } from "@mui/material";
import { InputTagState } from "../../../../core/InputSelect/useInputSelect";

const RightBlog: FC<RightBlogProps> = (props) => {
  const {
    onChangePublishStatus,
    isValid,
    onChangeCommentStatus,
    onChangeTags,
    onChangeTitleMeta,
    isLoading: isLoadingSubmit,
    className,
    ...restProps
  } = props;
  const [tags, setTags] = useState<Array<string>>([]);
  const [value, setValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onHandleRequest = (query: string) => {
    return getSuggestTagBlog(query);
  };
  const onHandleSuccess = (data: GetSuggestCreateResponse) => {
    setTags(data.data);
  };

  const onHandleError = (err: any) => {
    setError(err?.message);
  };
  const { isLoading, onSendRequest } = useCallApi<GetSuggestCreateResponse>({
    request: onHandleRequest,
    onSuccess: onHandleSuccess,
    onError: onHandleError,
  });
  const onChangePublish = (status: boolean) => {
    if (isFunction(onChangePublishStatus)) {
      onChangePublishStatus(status);
    }
  };
  const onChangeComment = (status: boolean) => {
    if (isFunction(onChangeCommentStatus)) {
      onChangeCommentStatus(status);
    }
  };
  const onChangeTagHandler = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      onSendRequest(value);
      setIsTyping(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
      setIsTyping(true);
      setTags([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const getTagHandler = (tags: Array<InputTagState>) => {
    if (isFunction(onChangeTags)) {
      onChangeTags(tags.map((item) => item.value));
    }
  };
  const onChangeMetaTitle = (event: ChangeEvent<HTMLInputElement>) => {
    if (isFunction(onChangeTitleMeta)) {
      onChangeTitleMeta(event.target.value);
    }
  };

  return (
    <>
      <div {...restProps} className={classList(styles.right, className)}>
        <div className="d-flex align-center justify-between">
          <p>Publish</p>
          <ButtonToggle
            onChange={onChangePublish}
            className={styles.normal}
            initialStatus
          />
        </div>
        <div
          className={`d-flex align-center justify-between ${styles.comments}`}
        >
          <p>Enable Comments</p>
          <ButtonToggle
            onChange={onChangeComment}
            className={styles.normal}
            initialStatus
          />
        </div>
        <Input onChange={onChangeMetaTitle} label="Meta title" />
        <InputSelect
          onGetTag={getTagHandler}
          onGetValue={onChangeTagHandler}
          titleList="Suggest Tags"
          placeholder="Meta Tags"
        >
          {(isLoading || isTyping) && <LoadingCore />}
          {!isLoading &&
            !isTyping &&
            tags?.length > 0 &&
            tags?.map((item) => {
              return <InputSelect.Item text={item} key={item} />;
            })}
          {!isLoading && !isTyping && tags?.length === 0 && (
            <p className={styles["no-match"]}>
              No suggest match with <span>{`"${value}"`}</span>
            </p>
          )}
          {!isLoading && !isTyping && error && (
            <Alert severity="error">{error}</Alert>
          )}
        </InputSelect>
        <Button
          className={styles.submit}
          type="submit"
          prefix="normal"
          color="inherit"
          fullWidth
          size="large"
          variant="outlined"
          disabled={!isValid}
          isLoading={isLoadingSubmit}
        >
          Post
        </Button>
      </div>
    </>
  );
};

RightBlog.defaultProps = {
  className: "",
  onChangePublishStatus: (status) => {},
  onChangeCommentStatus: (status) => {},
  isValid: false,
  onChangeTags: (tags) => {},
  onChangeTitleMeta: (value) => {},
  isLoading: false
};

RightBlog.propTypes = {
  className: PropTypes.string,
  onChangePublishStatus: PropTypes.func,
  onChangeCommentStatus: PropTypes.func,
  isValid: PropTypes.bool,
  onChangeTags: PropTypes.func,
  onChangeTitleMeta: PropTypes.func,
  isLoading: PropTypes.bool
};

export default RightBlog;

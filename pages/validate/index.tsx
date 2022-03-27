import React, { FormEvent, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../../components/core";
import { HeadGeneral } from "../../components/common";
import { AuthBasicLayout } from "../../components/layout";
import { NextPageWithLayout } from "../../types/layout";
import useInput from "../../hook/useInput";
import { isEmail, isMobilePhone } from "../../utils/string";
import { useAuthenticate } from "../../service/auth";
import { useRouter } from "next/router";
import { VALIDATE_OTP } from "../../constants/path";
import { AppDispatch, RootState } from "../../store";
import { authActions } from "../../store/slices/auth";

const Validate: NextPageWithLayout = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector<RootState>(state => state.auth.username) as string;
  const router = useRouter();
  const { data, error, isLoading, onAuthenticate, onResetAsync } =
    useAuthenticate();
  const { value, isTouched, isValid, onChangeHandler, onTouchedHandler } =
    useInput("or", isEmail, isMobilePhone);

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (!isValid || !username) {
      return;
    }
    onAuthenticate(username, value);
  };
  useEffect(() => {
    if (!isLoading && data) {
      dispatch(authActions.onSetAuth({
        username: username,
        type: isEmail(value) ? 'Email' : 'Mobile Phone',
        validate_info: value
      }))
      router.push({
        pathname: VALIDATE_OTP,
      });
    }
  }, [isLoading, data, router, value, dispatch, username]);
  useEffect(() => {
    return () => {
      onResetAsync();
    };
  }, [onResetAsync]);

  return (
    <>
      <HeadGeneral title="Validate Account | Store" />
      <form onSubmit={onSubmitForm}>
        <Input
          label="Email or Mobile Phone..."
          value={value}
          onBlur={onTouchedHandler}
          onChange={onChangeHandler}
          errorMessage="Email or Mobile Phone is not valid"
          error={isTouched && !isValid}
        />
        <Button
          type="submit"
          fullWidth
          size="large"
          prefix="basic"
          color="primary"
          disabled={!isValid}
          isLoading={isLoading}
        >
          Send OTP
        </Button>
        {!isLoading && error && <p>{error?.message}</p>}
      </form>
    </>
  );
};

Validate.getLayout = (page: ReactElement) => {
  return <AuthBasicLayout title="Validate Account">{page}</AuthBasicLayout>;
};
export default Validate;

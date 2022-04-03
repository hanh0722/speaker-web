import React from "react";
import useInput from "../../hook/useInput";
import { HeadGeneral } from "../../components/common";
import { Button, Input } from "../../components/core";
import { AuthBasicLayout } from "../../components/layout";
import styles from "./styles.module.scss";
import { isRequired } from "../../utils/string";

const ForgotPassword = () => {
  const { isTouched, isValid, onChangeHandler, onTouchedHandler, value } =
    useInput("and", isRequired);
  return (
    <>
      <HeadGeneral title="Reset Password" />
      <AuthBasicLayout title="Reset Password">
        <form>
          <p className={styles.title}>
            System will send OTP to your email/mobile phone to reset your
            password.
          </p>
          <Input
            className={styles.form}
            value={value}
            onChange={onChangeHandler}
            onBlur={onTouchedHandler}
            error={!isValid && isTouched}
            label="Username..."
            placeholder="Enter Username..."
            errorMessage="Username must be filled!"
          />
          <Button
            className={styles.button}
            fullWidth
            size="large"
            prefix="normal"
            variant="outlined"
            color="inherit"
          >
            Send OTP
          </Button>
        </form>
      </AuthBasicLayout>
    </>
  );
};
export default ForgotPassword;

import { useSelector } from "react-redux";
import React, { FormEvent, useEffect, useState } from "react";
import { AuthBasicLayout } from "../../components/layout";
import { RootState } from "../../store";
import { AuthState } from "../../store/slices/auth";
import styles from "./styles.module.scss";
import { InputOTP } from "../../components/common";
import useInterval from "../../hook/useInterval";
import { getMinutesAndSeconds } from "../../utils/time";
import { useAuthenticate, useCheckOTPService } from "../../service/auth";
import ModalOTP from "./ModalOTP";
import { Button } from "../../components/core";
import { convertToOTP } from "../../utils/string";

const ValidateOTP = () => {
  const {
    isLoading: isLoadingCheck,
    data: dataCheck,
    error: errorCheck,
    onCheckOTP,
    onResetAsync: onResetOTP,
  } = useCheckOTPService();
  const [otp, setOTP] = useState<number | null>(null);
  const { isActive, timeValue, onSetInterval } = useInterval(300, true);
  const { isLoading, data, error, onAuthenticate, onResetAsync } =
    useAuthenticate();
  const { type, username, validate_info } = useSelector<RootState>(
    (state) => state.auth
  ) as AuthState;
  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (!otp || !username) {
      return;
    }
    onCheckOTP(username, otp);
  };
  const onResend = () => {
    if (isActive && timeValue > 0) {
      return;
    }
    if (username && validate_info) {
      onAuthenticate(username, validate_info);
    }
  };
  const onGetOTP = (otp: Array<number | null>) => {
    const getOTP = convertToOTP(otp);
    setOTP(getOTP);
  };
  useEffect(() => {
    if (data && !isLoading) {
      onSetInterval(true, 300);
    }
  }, [data, isLoading, onSetInterval]);

  useEffect(() => {
    return () => {
      onResetAsync();
      onResetOTP();
    };
  }, [onResetAsync, onResetOTP]);
  return (
    <>
      <ModalOTP show={!isLoadingCheck && !!dataCheck && !errorCheck} />
      <AuthBasicLayout
        mainClass={styles.container}
        title={`Validate Account - ${type}`}
      >
        <form onSubmit={onSubmitForm}>
          <p className={`text-center lh-20 ${styles.title}`}>
            Enter the OTP was sent to{" "}
            <span className="text-lowercase">{type}</span>
          </p>
          <p className={`text-center weight-500 f-18 lh-24 ${styles.info}`}>
            {validate_info}
          </p>
          <p className={`text-center ${styles.time}`}>
            This code will be expired after{" "}
            <span>{getMinutesAndSeconds(timeValue)}</span>
          </p>
          <div className={styles.otp}>
            <InputOTP inputs={6} onGet={onGetOTP} />
          </div>
          <p className={`text-center ${styles.resend}`}>
            You {"haven't"} received the OTP?{" "}
            <span onClick={onResend}>
              {!isActive ? "Resend" : getMinutesAndSeconds(timeValue)}
            </span>
          </p>
          {(error || errorCheck) && (
            <p className={`text-center ${styles.error}`}>
              {error?.message || errorCheck?.message}
            </p>
          )}
          <div className={styles.button}>
            <Button
              isLoading={isLoadingCheck || isLoading}
              fullWidth
              size="large"
              variant="outlined"
              prefix="normal"
              color="inherit"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </AuthBasicLayout>
    </>
  );
};
export default ValidateOTP;

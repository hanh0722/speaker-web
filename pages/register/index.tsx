import React, { useState } from "react";
import useInput from "../../hook/useInput";
import { CheckBox } from "../../components/common";
import { Button } from "../../components/core";
import Input from "../../components/core/Input";
import { FormAuth } from "../../components/layout";
import styles from "./styles.module.scss";
import { isEmail, isRequired, isValidPassword } from "../../utils/string";
import { IconEye } from "../../components/core/Icons";

const Register = () => {
  const [isTextType, setIsTextType] = useState(false);
  const {
    isValid: isValidEmail,
    isTouched: isTouchedEmail,
    onChangeHandler: onChangeEmail,
    onTouchedHandler: onTouchedEmail,
    value: email,
  } = useInput(isEmail);
  const {
    isValid: isPassword,
    isTouched: isTouchedPassword,
    onChangeHandler: onChangePassword,
    onTouchedHandler: onTouchedPassword,
    value: password,
  } = useInput(isValidPassword);
  const {
    isValid: isValidName,
    isTouched: isTouchedName,
    onChangeHandler: onChangeName,
    onTouchedHandler: onTouchedName,
    value: name,
  } = useInput(isRequired);

  const onChangeType = () => {
    setIsTextType(prevState => !prevState);
  }
  return (
    <>
      <FormAuth title="Register">
        <form>
          <Input
            onChange={onChangeName}
            onBlur={onTouchedName}
            type="text"
            label="Name..."
            error={!isValidName && isTouchedName}
            errorMessage="Name is required"
          />
          <Input
            onChange={onChangeEmail}
            onBlur={onTouchedEmail}
            type="email"
            label="Email..."
            error={!isValidEmail && isTouchedEmail}
            errorMessage="Email is not valid"
          />
          <Input
            onChange={onChangePassword}
            onBlur={onTouchedPassword}
            type={isTextType ? "text" : "password"}
            label="Password..."
            error={!isPassword && isTouchedPassword}
            errorMessage="Password must have at least 8 character, a number[0-9], a letter [a-z] and one special character"
            iconName={IconEye}
            onClickIcon={onChangeType}
          />
          <div className="d-flex align-center gap-16">
            <CheckBox isCheck />
            <p>
              By Registering, I agree with all privacy policy and term of
              service
            </p>
          </div>
          <Button className={styles.button} fullWidth size="large">
            Register
          </Button>
        </form>
      </FormAuth>
    </>
  );
};

export default Register;

import React, { FormEvent, useEffect, useState } from "react";
import useInput from "../../hook/useInput";
import { CheckBox } from "../../components/common";
import { Button } from "../../components/core";
import Input from "../../components/core/Input";
import { FormAuth } from "../../components/layout";
import styles from "./styles.module.scss";
import { isRequired, isValidPassword } from "../../utils/string";
import { IconEye } from "../../components/core/Icons";
import { useRegister } from "../../service";

const Register = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [isTextType, setIsTextType] = useState(false);
  const {data, error, isLoading, onRegister, onResetAsync} = useRegister();
  const {
    isValid: isValidUsername,
    isTouched: isTouchedUsername,
    onChangeHandler: onChangeUsername,
    onTouchedHandler: onTouchedUsername,
    value: username,
  } = useInput('or', isRequired);
  const {
    isValid: isPassword,
    isTouched: isTouchedPassword,
    onChangeHandler: onChangePassword,
    onTouchedHandler: onTouchedPassword,
    value: password,
  } = useInput(null, isValidPassword);
  const {
    isValid: isValidName,
    isTouched: isTouchedName,
    onChangeHandler: onChangeName,
    onTouchedHandler: onTouchedName,
    value: name,
  } = useInput('and', isRequired);

  const onChangeType = () => {
    setIsTextType((prevState) => !prevState);
  };
  const onCheck = (value: boolean) => {
    setIsCheck(value);
  };
  useEffect(() => {
    return () => {
      onResetAsync();
    }
  }, [onResetAsync]);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isValidUsername || !isPassword || !isValidName || !isCheck) {
      return;
    }
    onRegister(name, username, password);
  };
  console.log(error);
  return (
    <>
      <FormAuth title="Register">
        <form onSubmit={onSubmit}>
          <Input
            onChange={onChangeName}
            onBlur={onTouchedName}
            type="text"
            label="Name..."
            error={!isValidName && isTouchedName}
            errorMessage="Name is required"
          />
          <Input
            onChange={onChangeUsername}
            onBlur={onTouchedUsername}
            type="text"
            label="Username..."
            error={!isValidUsername && isTouchedUsername}
            errorMessage="Username is not valid"
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
            <CheckBox onChangeCheck={onCheck} isCheck={isCheck} />
            <p>
              By Registering, I agree with all privacy policy and term of
              service
            </p>
          </div>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={!isPassword || !isValidUsername || !isValidName || !isCheck}
            className={styles.button}
            fullWidth
            size="large"
          >
            Register
          </Button>
          {error && <p className={"error-message"}>{error}</p>}
        </form>
      </FormAuth>
    </>
  );
};

export default Register;

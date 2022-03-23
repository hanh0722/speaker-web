import React, { FC } from "react";
import { useRouter } from "next/router";
import { ClassNameProps } from "../../../../types/string";
import { classList } from "../../../../utils/string";
import IconUser from "../../../core/Icons/IconUser";
import styles from "./styles.module.scss";
import { LOGIN } from "../../../../constants/path";

const LoginAccount: FC<ClassNameProps> = (props) => {
  const router = useRouter();
  const { className, children } = props;
  const onMoveToLogin = () => {
    router.push(LOGIN);
  };
  return (
    <>
      <div
        onClick={onMoveToLogin}
        className={classList("d-flex align-center", styles.login, className)}
      >
        <IconUser variant="xl" />
        <span>Login with Created Account</span>
        {children}
      </div>
    </>
  );
};

export default LoginAccount;

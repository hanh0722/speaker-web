import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { WELCOME } from "../../constants/type";
import { Welcome } from "../../components/container/Login";
import { HeadGeneral } from "../../components/common";

const Login = () => {
  const { query } = useRouter();
  const isWelcomePage = useMemo(() => {
    try {
      return !!query[WELCOME];
    } catch (err) {
      return false;
    }
  }, [query]);
  return (
    <>
      <HeadGeneral title="Login" />
      {isWelcomePage ? <Welcome /> : <></>}
    </>
  );
};

export default Login;

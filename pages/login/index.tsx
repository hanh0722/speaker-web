import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { WELCOME } from "../../constants/type";
import { Welcome } from "../../components/container/Login";

const Login = () => {
  const { query } = useRouter();
  const isWelcomePage = useMemo(() => {
    try {
      return Boolean(query[WELCOME]);
    } catch (err) {
      return false;
    }
  }, [query]);
  return <>
    {isWelcomePage ? <Welcome/> : <></>}
  </>;
};

export default Login;

import React from "react";
import { Container } from "@mui/material";
import Input from "../../components/core/Input";
const Register = () => {
  return (
    <Container>
      <form>
        <Input placeholder="Username..." label="Username" hiddenLabel />
      </form>
    </Container>
  );
};

export default Register;

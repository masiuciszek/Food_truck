import React, { useState } from "react";
import { Btn } from "./styles/Btns";
import { useRouter } from "next/router";
import { FormGroup, FormStyles, Input } from "./styles/Form.elements";

import { FormWrapper } from "./styles/Wrappers";

interface Props {
  title: string;
}

const LoginForm = ({ title }: Props) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <FormStyles>
        <FormGroup>
          <Input
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </FormGroup>

        <Btn type="submit">Register</Btn>
      </FormStyles>
    </FormWrapper>
  );
};

export default LoginForm;

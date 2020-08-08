import React, { useState } from "react";
import { Btn } from "./styles/Btns";
import { useRouter } from "next/router";
import { FormGroup, FormStyles, Input } from "./styles/Form.elements";
import { FormWrapper } from "./styles/Wrappers";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "src/store/auth/auth.selectors";
import { AppState } from "src/store";
import { loginUser } from "src/store/auth/auth.actions";
import Modal from "./Modal";
import useToggle from "src/hooks/useToggle";

interface Props {
  title: string;
}

const LoginForm = ({ title }: Props) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [on, toggleOn] = useToggle();

  const { email, password } = loginData;

  const isAuth = useSelector((state: AppState) => selectIsAuth(state));
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUser(loginData));
    setLoginData({ email: "", password: "" });
  };

  React.useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return (
    <>
      <FormWrapper>
        <h3>{title}</h3>
        <FormStyles onSubmit={handleSubmit}>
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

          <FormGroup>
            <span id="forgot-password" onClick={toggleOn}>
              forgot password?
            </span>
          </FormGroup>

          <Btn type="submit">Register</Btn>
        </FormStyles>
      </FormWrapper>
      <Modal on={on} modalBodyType="forgot password" onSwitch={toggleOn} />
    </>
  );
};

export default LoginForm;

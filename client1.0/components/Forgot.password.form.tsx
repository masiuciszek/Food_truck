import * as React from "react";
import { useDispatch } from "react-redux";
import {
  getNewPasswordToken,
  setUserMessage,
} from "src/store/auth/auth.actions";
import Message from "./Message";
import { Btn } from "./styles/Btns";
import { FormGroup, FormStyles, Input } from "./styles/Form.elements";
import { FormWrapper } from "./styles/Wrappers";

const ForgotPasswordForm = () => {
  const [email, setEmail] = React.useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(re)) {
      dispatch(setUserMessage("input invalid"));
      return;
    } else {
      dispatch(getNewPasswordToken({ email }));
    }
  };

  return (
    <>
      <Message />
      <FormWrapper>
        <h3 style={{ width: "100%" }}>Enter your email</h3>
        <FormStyles onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              placeholder="your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <Btn type="submit" style={{ width: "21rem" }}>
            get new password
          </Btn>
        </FormStyles>
      </FormWrapper>
    </>
  );
};
export default ForgotPasswordForm;

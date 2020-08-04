import * as React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "./styles/Btns";
import { FormGroup, FormStyles, Input } from "./styles/Form.elements";
import { FormWrapper } from "./styles/Wrappers";

const ForgotPasswordForm = () => {
  const [email, setEmail] = React.useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
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
  );
};
export default ForgotPasswordForm;

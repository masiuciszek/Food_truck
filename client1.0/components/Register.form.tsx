import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { registerUser } from "src/store/auth/auth.actions";
import { Btn } from "./styles/Btns";
import { useRouter } from "next/router";
import {
  FormGroupForCheckBox,
  FormGroup,
  FormStyles,
  Input,
  Label,
} from "./styles/Form.elements";
import { FormWrapper } from "./styles/Wrappers";
import { selectIsAuth } from "src/store/auth/auth.selectors";

interface Props {
  title: string;
}

const RegisterForm = ({ title }: Props) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    role: "USER",
    email: "",
    password: "",
    gender: "FEMALE",
  });

  const [password2, setPassword2] = React.useState("");

  const dispatch = useDispatch();

  const { firstName, lastName, email, password, gender } = formData;

  const isAuth = useSelector((state: AppState) => selectIsAuth(state));
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    const inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: RegisterFormData = {
      firstName: firstName,
      lastName: lastName,
      role: "USER",
      email: email,
      password: password,
      gender: gender,
    };

    if (password === password2) {
      dispatch(registerUser(data));
    } else {
      return;
    }
  };

  React.useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return (
    <FormWrapper>
      <h3>{title}</h3>
      <FormStyles onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="firstName"
            placeholder="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="lastName"
            placeholder="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroupForCheckBox>
          <Input
            type="radio"
            name="gender"
            value="FEMALE"
            id="FEMALE"
            checked={gender === "FEMALE"}
            onChange={handleChange}
          />
          <Label htmlFor="FEMALE">
            <span>Female</span>
          </Label>

          <Input
            type="radio"
            name="gender"
            value="MALE"
            id="MALE"
            checked={gender === "MALE"}
            onChange={handleChange}
          />
          <Label htmlFor="MALE">
            <span>Male</span>
          </Label>
        </FormGroupForCheckBox>
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
          <Input
            name="password2"
            type="password"
            placeholder="repeat password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </FormGroup>
        <Btn type="submit">Login</Btn>
      </FormStyles>
    </FormWrapper>
  );
};

export default RegisterForm;

import React, { useState } from "react";
import { Btn } from "./styles/Btns";
import {
  FormGroupForCheckBox,
  FormGroup,
  FormStyles,
  Input,
  Label,
} from "./styles/Form.elements";
import { FormWrapper } from "./styles/Wrappers";

interface Props {
  title: string;
}

const RegisterForm = ({ title }: Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    gender: "female",
  });

  const { firstName, lastName, email, password, password2, gender } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    const inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({ ...formData, [event.target.name]: inputValue });

    console.log(gender);
  };

  return (
    <FormWrapper>
      <h3>{title}</h3>
      <FormStyles>
        <FormGroup>
          <Input
            type='text'
            name='firstName'
            placeholder='firstName'
            value={firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='lastName'
            placeholder='lastName'
            value={lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name='email'
            type='email'
            placeholder='email'
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroupForCheckBox>
          <Input
            type='radio'
            name='gender'
            value='female'
            id='female'
            checked={gender === "female"}
            onChange={handleChange}
          />
          <Label htmlFor='female'>
            <span>Female</span>
          </Label>
          <Input
            type='radio'
            name='gender'
            value='male'
            id='male'
            checked={gender === "male"}
            onChange={handleChange}
          />
          <Label htmlFor='male'>
            <span>Male</span>
          </Label>
        </FormGroupForCheckBox>
        <FormGroup>
          <Input
            name='password'
            type='password'
            placeholder='password'
            value={password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name='password2'
            type='password'
            placeholder='repeat password'
            value={password2}
            onChange={handleChange}
          />
        </FormGroup>
        <Btn type='submit'>Register</Btn>
      </FormStyles>
    </FormWrapper>
  );
};

export default RegisterForm;

import React from "react";
import { Btn } from "./styles/Btns";
import {
  FormGroupForCheckBox,
  FormGroup,
  FormStyles,
  Input,
} from "./styles/Form.elements";
import { FormWrapper } from "./styles/Wrappers";

interface Props {
  title: string;
}

const RegisterForm = ({ title }: Props) => {
  return (
    <FormWrapper>
      <h3>{title}</h3>
      <FormStyles>
        <FormGroup>
          <Input type='text' name='firstName' placeholder='firstName' />
        </FormGroup>
        <FormGroup>
          <Input type='text' name='lastName' placeholder='lastName' />
        </FormGroup>
        <FormGroup>
          <Input name='email' type='email' placeholder='email' />
        </FormGroup>
        <FormGroupForCheckBox>
          <Input type='checkbox' name='MALE' />
          <Input type='checkbox' name='GENDER' />
        </FormGroupForCheckBox>
        <FormGroup>
          <Input name='password' type='password' placeholder='password' />
        </FormGroup>
        <Btn type='submit'>Register</Btn>
      </FormStyles>
    </FormWrapper>
  );
};

export default RegisterForm;

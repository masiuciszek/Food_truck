import React from "react";
import {
  FormGroup,
  FormLabel,
  FormInput,
} from "../../components/styled/FormElements";

export const renderForm = (isLoginForm: boolean) =>
  !isLoginForm ? (
    <>
      <FormGroup>
        <FormLabel>
          <span>firstname</span>
          <FormInput type="text" placeholder="firstname" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>lastname</span>
          <FormInput type="text" placeholder="lastname" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>email</span>
          <FormInput type="email" placeholder="email" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>password</span>
          <FormInput type="password" placeholder="password" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>confirm password</span>
          <FormInput type="password" placeholder="repeat password" />
        </FormLabel>
      </FormGroup>
    </>
  ) : (
    <>
      <FormGroup>
        <FormLabel>
          <span>email</span>
          <FormInput type="email" placeholder="email" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>password</span>
          <FormInput type="password" placeholder="password" />
        </FormLabel>
      </FormGroup>
    </>
  );

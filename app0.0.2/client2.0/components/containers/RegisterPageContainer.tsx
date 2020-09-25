import React from "react";
import { useAuthDispatch } from "../../context/authState/AuthProvider";
import Form from "../elements/Form";

const RegisterPageContainer = () => {
  const [formData, setFormData] = React.useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useAuthDispatch();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (registerFormData: RegisterFormData) => {
    const res = await fetch("http://localhost:4000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerFormData),
    });
    const data = await res.json();
    const { token } = data as Record<string, any>;
    dispatch({ type: "LOGIN", payload: token });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    handleRegister(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    console.log("Register");
  };

  return (
    <Form
      className="sign-in-form"
      submitText="sign in"
      formData={formData}
      isLoginForm={false}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default RegisterPageContainer;

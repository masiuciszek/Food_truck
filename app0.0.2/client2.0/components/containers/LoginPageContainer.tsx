import React from "react";
import Form from "../elements/Form";

interface LoginPageContainerProps {}

const LoginPageContainer: React.FC<LoginPageContainerProps> = ({}) => {
  const [loginData, setLoginData] = React.useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  return (
    <Form
      className="sign-in-form"
      submitText="sign in"
      isLoginForm
      formData={loginData}
      handleChange={handleChange}
    />
  );
};
export default LoginPageContainer;

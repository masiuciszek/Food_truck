import React from "react";
import Form from "../elements/Form";

interface RegisterPageContainerProps {}

const RegisterPageContainer: React.FC<RegisterPageContainerProps> = ({}) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Form
        className="sign-in-form"
        submitText="sign in"
        formData={formData}
        handleChange={handleChange}
      />
    </>
  );
};
export default RegisterPageContainer;

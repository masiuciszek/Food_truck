import { useRouter } from "next/router";
import React from "react";
import { loginUser } from "../../context/authState/AuthActions";
import {
  useAuthDispatch,
  useAuthState,
} from "../../context/authState/AuthProvider";
import Form from "../elements/Form";

interface LoginPageContainerProps {}

const LoginPageContainer: React.FC<LoginPageContainerProps> = ({}) => {
  const dispatch = useAuthDispatch();
  const { isLoggedIn } = useAuthState();
  const router = useRouter();
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
    loginUser(loginData)(dispatch);
    setLoginData({
      email: "",
      password: "",
    });
  };

  console.log(isLoggedIn);
  React.useEffect(() => {
    if (isLoggedIn) {
      // TODO: When stores is ready then redirect to stores
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <Form
      className="sign-in-form"
      submitText="sign in"
      isLoginForm
      formData={loginData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default LoginPageContainer;

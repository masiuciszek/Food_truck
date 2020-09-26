import { GetServerSideProps } from "next";
import React from "react";
import RegisterPageContainer from "../../components/containers/RegisterPageContainer";
import Title from "../../components/elements/Title";
import { ColumnPage } from "../../components/styled/wrappers";
import { getMe } from "../../context/authState/AuthActions";
import {
  useAuthDispatch,
  useAuthState,
} from "../../context/authState/AuthProvider";
import { parseCookies } from "../../lib/parseCookies";
import { useRouter } from "next/router";

interface RegisterPageProps {
  token: string;
}

const RegisterPage = ({ token }: RegisterPageProps) => {
  const dispatch = useAuthDispatch();
  const { isLoggedIn } = useAuthState();
  const router = useRouter();

  React.useEffect(() => {
    // TODO: REMOVE
    console.log("token", token);

    if (token) {
      dispatch({ type: "SET_AUTH_TOKEN", payload: token });
      getMe(token)(dispatch);
      if (isLoggedIn) {
        // TODO: Change to stores when fixed stores page
        router.push("/");
      }
    }
  }, [token]);
  return (
    <>
      <ColumnPage>
        <Title className="register-page-title" title="Become a food master" />
        <RegisterPageContainer />
      </ColumnPage>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx.req);

  return {
    props: {
      token: cookies.token || "",
    },
  };
};

export default RegisterPage;

import Profile from "components/Profile";
import { LargeWrapper } from "components/styles/Wrappers";
import { parseCookies } from "lib/parseCookies";
import { GetServerSideProps } from "next";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { setAuthToken, userLoaded } from "src/store/auth/auth.actions";
import { selectUser } from "src/store/auth/auth.selectors";

interface Props {
  token: string;
}

const ProfilePage = ({ token }: Props) => {
  const dispatch = useDispatch();

  const user = useSelector((state: AppState) => selectUser(state));

  React.useEffect(() => {
    if (token) {
      dispatch(setAuthToken(token));
      dispatch(userLoaded(token));
    }
  }, [token]);

  return (
    <LargeWrapper>
      <Profile user={user} token={token} />
    </LargeWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;

  const cookies = parseCookies(req);
  return {
    props: {
      token: cookies.token || "",
    },
  };
};

export default ProfilePage;

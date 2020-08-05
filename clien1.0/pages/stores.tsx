/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { parseCookies } from "lib/parseCookies";
import { GetServerSideProps } from "next";
import React from "react";
import { useDispatch } from "react-redux";
import { setAuthToken, userLoaded } from "src/store/auth/auth.actions";
import { setStores } from "../src/store/store/store.actions";

interface Props {
  token: string;
  stores: Store[];
}

const StoresPage = ({ token, stores }: Props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token) {
      dispatch(setAuthToken(token));
      dispatch(userLoaded(token));
    }
    dispatch(setStores(stores));
  }, [token, stores]);

  return (
    <div>
      <h1>StoresPage</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx.req);

  const res = await fetch("http://localhost:4000/store/stores");
  const data: {
    success: true;
    msg: string;
    data: Store[];
  } = await res.json();

  return {
    props: {
      token: cookies.token || "",
      stores: data.data,
    },
  };
};

export default StoresPage;

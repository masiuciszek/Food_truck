import { GetServerSideProps } from "next";
import React from "react";
import StoreContainer from "../../components/containers/StoreContainer";
import Title from "../../components/elements/Title";
import { PageColumn } from "../../components/styled/wrappers";
import { getMe } from "../../context/authState/AuthActions";
import { useAuthDispatch } from "../../context/authState/AuthProvider";
import { useStoreDispatch } from "../../context/storeState/StoreProvider";
import { parseCookies } from "../../lib/parseCookies";

interface StoresPageProps {
  stores: Store[];
  token: string;
}

const StoresPage: React.FC<StoresPageProps> = ({ stores, token }) => {
  const storeD = useStoreDispatch();
  const AuthD = useAuthDispatch();

  React.useEffect(() => {
    if (stores) {
      storeD({ type: "SET_STORES", payload: stores });
    }
    if (token) {
      AuthD({ type: "SET_AUTH_TOKEN", payload: token });
      getMe(token)(AuthD);
    }
  }, [stores, token]);

  return (
    <>
      <PageColumn>
        <Title
          className="main_title_stores_page"
          title="Stores"
          subTitle="sick stores"
        />
        <StoreContainer />
      </PageColumn>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:4000/store");
  const { data } = await res.json();
  const cookies = parseCookies(ctx.req);

  return {
    props: {
      stores: data,
      token: cookies.token || "",
    },
  };
};

export default StoresPage;

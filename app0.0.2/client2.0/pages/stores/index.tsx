import { GetServerSideProps } from "next";
import React from "react";
import Title from "../../components/elements/Title";
import { PageColumn } from "../../components/styled/wrappers";
import { useStoreDispatch } from "../../context/storeState/StoreProvider";

interface StoresPageProps {
  stores: Store[];
}

const StoresPage: React.FC<StoresPageProps> = ({ stores }) => {
  const dispatch = useStoreDispatch();
  React.useEffect(() => {
    if (stores) {
      dispatch({ type: "SET_STORES", payload: stores });
    }
  }, []);

  return (
    <PageColumn>
      <Title
        className="main_title_stores_page"
        title="Stores"
        subTitle="sick stores"
      />
    </PageColumn>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:4000/store");
  const { data } = await res.json();
  return {
    props: {
      stores: data,
    },
  };
};

export default StoresPage;

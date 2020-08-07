import * as React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPageContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  // singleStore: Store;
  singleStore: Store;
}

const SingleStore = ({ singleStore }: Props) => {
  const router = useRouter();
  React.useEffect(() => {
    // render first on client and then on the server
  }, [router.query]);

  return (
    <div>
      <h1>{singleStore.name}</h1>
      <h1>{singleStore.owner.firstName}</h1>
    </div>
  );
};

SingleStore.getInitialProps = async (ctx: NextPageContext) => {
  const { query, req } = ctx;

  // if (!req) {
  //   return { singleStore: {} };
  // }

  const res = await fetch(`http://localhost:4000/store/${query.id}`);
  const data: { success: boolean; msg: string; data: Store } = await res.json();

  return {
    singleStore: data.data,
  };
};

// export const getServerSideProps: GetServerSideProps<MyRoutes> = async (ctx) => {
//   const { req, query } = ctx;

//   if (!req) {
//     return { SingleStore: {} };
//   }

//   // console.log(query.storeId);
//   // res = await fetch(`http://localhost:/4000/store/${ctx.query.id}`);
//   // dataRes = await res.json();

//   return {
//     props: {
//       singleStore: "",
//     },
//   };
// };

export default SingleStore;

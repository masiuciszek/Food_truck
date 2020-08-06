import * as React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface Props {}

const SingleStore: React.FC<Props> = () => {
  // fetch single store by id
  const router = useRouter();

  return (
    <div>
      {" "}
      <h1> Single Store </h1>{" "}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      foo: {},
    },
  };
};

export default SingleStore;

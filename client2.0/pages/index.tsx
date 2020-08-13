import styled from "styled-components";
import Image from "../components/Image";
import { Page, PushDownFix, TitleWrapper } from "../components/styled/Page";
import Title from "../components/styled/Title";
import { GetServerSideProps } from "next";
import axios from "axios";

interface Props {
  foo: any;
}

const HomePage = ({ foo }: Props) => {
  return (
    <>
      <Page>
        <TitleWrapper>
          <Title
            className="Home-Title"
            title="Food for you"
            subTitle="Just how you like it"
            cta
            ctaPath="stores"
            ctaText="Stores"
          />
        </TitleWrapper>
        <Image className="Home-Hero-Image" />
      </Page>
      <PushDownFix margin="5rem 0" />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const res = await axios.get("http://localhost:4000/user/all");
//   const data = await res.data;

//   return {
//     props: {
//       foo: data.data,
//     },
//   };
// };

export default HomePage;

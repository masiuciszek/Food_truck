import * as React from "react";
import { HeroContentWrapper } from "components/styles/Wrappers";
import Hero from "components/Hero";
import Title from "components/Title";
import Image from "components/Image";
import { GetServerSideProps } from "next";
import { parseCookies } from "lib/parseCookies";
import { useDispatch } from "react-redux";
import { setAuthToken, userLoaded } from "src/store/auth/auth.actions";

interface IndexServerProps {
  token: string;
  fallback: string;
}

function Index({ token, fallback }: IndexServerProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token) {
      dispatch(setAuthToken(token));
      dispatch(userLoaded(token));
    }
  }, [token]);

  return (
    <>
      <Hero className="Hero-Home">
        <HeroContentWrapper>
          <Title
            className="HomeTitle"
            mainTitle="Delicious tables"
            cta
            ctaText="Tables"
            ctaPath="tables"
          />
          <Image imagePath="/images/the-munchies.png" imageAlt="Home Hero" />
        </HeroContentWrapper>
      </Hero>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;

  const cookies = parseCookies(req);
  return {
    props: {
      token: cookies.token || "",
      fallback: "",
    },
  };
};

export default Index;

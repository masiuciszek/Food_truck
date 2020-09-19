import Image from "../components/Image";
import { GetServerSideProps } from "next";
import Title from "../components/elements/Title";
import {
  HomePageWrapper,
  Col,
  Page,
  PushDown,
} from "../components/styled/wrappers";

const HomePage = () => {
  return (
    <>
      <Page>
        <HomePageWrapper>
          <Col>
            <Title
              className="main_title_home_page"
              title="Sick Tastes"
              subTitle="All different tastes"
              isCta
              ctaPath="stores"
            />
          </Col>
          <Col>
            <img src="/home-hero.png" alt="home-hero" className="home-hero" />
          </Col>
        </HomePageWrapper>
      </Page>
      <PushDown />
    </>
  );
};

export default HomePage;

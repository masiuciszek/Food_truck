import Image from "../components/Image";
import { GetServerSideProps } from "next";
import Title from "../components/elements/Title";
import { HomePageWrapper, Col, Page } from "../components/styled/wrappers";

const HomePage = () => {
  return (
    <Page>
      <HomePageWrapper>
        <Col>
          <Title
            className="main_title_home_page"
            title="Welcome"
            subTitle="All different tastes"
          />
        </Col>
        <Col>
          <img src="/home-hero.png" alt="home-hero" className="home-hero" />
        </Col>
      </HomePageWrapper>
    </Page>
  );
};

export default HomePage;

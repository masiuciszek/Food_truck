import styled from "styled-components";
import Image from "../components/Image";
import { Page } from "../components/styled/Page";
import Title from "../components/styled/Title";

const TitleWrapper = styled.div`
  flex: 1;
`;

const HomePage = () => {
  return (
    <Page>
      <TitleWrapper>
        <Title
          className="Home-Title"
          title="Food for you"
          subTitle="Just how you like it"
        />
      </TitleWrapper>
      <Image className="Home-Hero-Image" />
    </Page>
  );
};

export default HomePage;

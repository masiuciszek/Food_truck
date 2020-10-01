import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../../../components/styled/wrappers";
import { GetServerSideProps } from "next";

interface StoreProfileProps {
  storeData: Store;
}

const Wrapper = styled.section`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
`;

interface StoreHeroProps {
  image: string;
}
const StoreHero = styled.div<StoreHeroProps>`
  background-image: ${({ image }) => `url(${image})`};

  background-size: cover;
  background-position: center;
  padding-bottom: 62.5%;
  border-radius: 4px 4px 0 0;
`;

const StoreProfileBody = styled.div`
  background: ${({ theme }) => theme.colors.elements.headline};
  padding: 1em;
  border-radius: 0 0 4px 4px;
`;

const StoreProfile: React.FC<StoreProfileProps> = ({ storeData }) => {
  console.log(storeData);
  return (
    <PageWrapper>
      <Wrapper>
        <StoreHero image={storeData.photo} />
        <StoreProfileBody>
          <p>{storeData.desc}</p>
        </StoreProfileBody>
      </Wrapper>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  const res = await fetch(`http://localhost:4000/store/${slug}`);
  const { data } = await res.json();
  return {
    props: {
      storeData: data[0],
    },
  };
};

export default StoreProfile;

import * as React from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import styled from "styled-components";
import Title from "components/Title";
import { below } from "components/styles/Helpers";
import { Btn } from "components/styles/Btns";
import RatingBar from "components/RatingBar";

interface Props {
  singleStore: Store;
}

const StoreStyles = styled.section`
  border-radius: 1rem 1rem 0 0;
  ${({ theme }) => theme.shadow.elevations[2]};
  margin: 2rem auto;
  background: ${({ theme }) => theme.colors.background};
`;

interface StoreHeroProps {
  bgImg: string;
}
const StoreHero = styled.div<StoreHeroProps>`
  background: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  padding-bottom: 62.5%;
  position: relative;
  border-radius: 1rem 1rem 0 0;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1rem 1rem 0 0;
    background: ${(props) => props.theme.colors.shadowOne};
    width: 100%;
    height: 100%;
  }
`;

const TitleAttached = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  ${below.medium`
    top: 35%;
    width: 100%;
    h1{
      font-size: 3rem;
    }
    h3{
      font-size: 2rem;
    }
    a{
      padding: .2rem;
    }
  `}
  ${below.small`
    top: 32%;
      h1{
        font-size: 2rem;
      }
      h3{
        font-size: 1.7rem;
      }
      a{
        padding: .2rem;
        font-size: 1.2rem;
      }
  `}
`;

const Info = styled.aside`
  position: relative;
  padding: 5rem 1rem;
  h3 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.button};
    text-align: center;
  }
`;

const Tag = styled.div`
  background: ${(props) => props.theme.colors.button};
  color: #fff;
  width: 16rem;
  padding: 1rem 0.8rem;
  border-radius: 1rem;
  ${({ theme }) => theme.shadow.elevations[2]};
  position: absolute;
  right: 1rem;
  top: 1rem;
  text-align: center;
`;

const SingleStore = ({ singleStore }: Props) => {
  // Push from here
  const router = useRouter();

  return (
    <StoreStyles>
      <StoreHero bgImg={singleStore.imageString || ""} />
      <TitleAttached>
        <Title
          className="store-hero__title"
          mainTitle={singleStore.name}
          subTitle={`${singleStore.owner.firstName}'s Store`}
          size="5rem"
          size2="2.2rem"
          textColor="#fff"
          cta
          ctaPath="stores"
          ctaText="Stores"
        />
      </TitleAttached>
      <Info>
        <h3>{singleStore.name}</h3>
        <Tag>{singleStore.type}</Tag>
        <RatingBar />
      </Info>
    </StoreStyles>
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

export default SingleStore;

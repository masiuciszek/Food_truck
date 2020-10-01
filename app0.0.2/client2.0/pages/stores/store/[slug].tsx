import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../../../components/styled/wrappers";

interface StoreProfileProps {}

const Wrapper = styled.section`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
`;

const StoreHero = styled.div`
  background-image: url("https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
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

const StoreProfile: React.FC<StoreProfileProps> = ({}) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <PageWrapper>
      <Wrapper>
        <StoreHero />
        <StoreProfileBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veniam adipisci perspiciatis saepe? Ad ratione repellendus odio
            dolores deserunt ex asperiores! Distinctio, voluptates a. Corrupti
            ullam illo quidem numquam quos?
          </p>
        </StoreProfileBody>
      </Wrapper>
    </PageWrapper>
  );
};
export default StoreProfile;

import React from "react";
import styled from "styled-components";
interface StoreProfileProps {}

const StoreHero = styled.div`
  background-image: url("https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-position: center;
  padding-bottom: 62.5%;
`;

const StoreProfile: React.FC<StoreProfileProps> = ({}) => {
  return (
    <>
      <StoreHero>
        <h1>Hello</h1>
      </StoreHero>
    </>
  );
};
export default StoreProfile;

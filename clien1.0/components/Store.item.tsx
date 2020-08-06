import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  store: Store;
}

const StoreItemStyles = styled.section`
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 1rem;
  padding: 1rem;
  ${(props) => props.theme.shadow.elevations[2]};
  transform: ${({ theme }) => theme.transition.mainTransition};
  h2 {
    font-size: 3rem;
    text-transform: capitalize;
    border-bottom: 2px solid ${({ theme }) => theme.colors.button};
  }
`;

const StoreFooter = styled.div`
  h3 {
  }

  span {
    color: ${(props) => props.theme.colors.button};
  }
`;

const StoreItem = ({ store }: Props) => {
  const slug = store.name.split(" ").join("-").toLowerCase();

  return (
    <Link href="/store/[slug]" as={`/store/${slug}`}>
      <a>
        <StoreItemStyles>
          <h2>{store.name}</h2>
          <StoreFooter>
            <h3>
              {" "}
              Store Owner <span>{store.owner.firstName}</span>
            </h3>
          </StoreFooter>
        </StoreItemStyles>
      </a>
    </Link>
  );
};

export default StoreItem;

import React from "react";
import styled, { css } from "styled-components";
import { PageWrapper } from "../../../components/styled/wrappers";
import { GetServerSideProps } from "next";
import { Button } from "../../../components/styled/Buttons";
import { useToggle } from "../../../hooks/useToggle";
import CommentArea from "../../../components/store/CommentArea";
import { AnimatePresence } from "framer-motion";
import {
  useAuthState,
  useAuthDispatch,
} from "../../../context/authState/AuthProvider";
import Alert from "../../../components/elements/Alert";
import { below, handleFlex } from "../../../src/utils/helpers";

interface StoreProfileProps {
  storeData: Store;
}

const Wrapper = styled.section`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
  ${below.small`
    margin-bottom: 3em;
  `}
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
  padding: 1em 5em;
  border-radius: 0 0 4px 4px;
  position: relative;
  p {
  }
  span,
  li {
    color: ${({ theme }) => theme.colors.illustrations.main};
    background: ${({ theme }) => theme.colors.illustrations.highlight};
    padding: 0.3em;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
  }
  .tags {
    position: absolute;
    right: 3em;
    top: 0;
  }
  .tag {
    margin: 0.2em 0.5em;
    min-width: 3.45em;
    display: inline-block;
    text-align: center;
  }
`;

const CommentsWrapper = styled.div`
  button {
    width: 12em;
    border: 2px solid ${({ theme }) => theme.colors.illustrations.highlight};
    margin: 1rem auto 2rem auto;
    display: block;
    &:hover {
      width: 11.5em;
    }
  }
`;

const StoreProfile: React.FC<StoreProfileProps> = ({ storeData }) => {
  const { state: showComments, toggle } = useToggle();
  const { isLoggedIn, status } = useAuthState();
  const dispatch = useAuthDispatch();

  const showAlert = () => {
    dispatch({ type: "MESSAGE_HANDLER", payload: "REJECTED" });
  };
  return (
    <PageWrapper>
      {status === "REJECTED" && (
        <Alert message="you have to be logged in to leave a review" />
      )}
      <Wrapper>
        <StoreHero image={storeData.photo} />
        <StoreProfileBody>
          <p>{storeData.desc}</p>
          <p>
            Owner{" "}
            <span>
              {storeData.author.firstName} {storeData.author.lastName}
            </span>
          </p>
          <ul className="tags">
            {storeData.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <CommentsWrapper>
            <Button textColor bgColor onClick={isLoggedIn ? toggle : showAlert}>
              Leave a Review
            </Button>

            <AnimatePresence>
              {showComments && <CommentArea on={showComments} />}
            </AnimatePresence>
          </CommentsWrapper>
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

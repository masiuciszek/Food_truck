import React from "react";
import styled from "styled-components";
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
  padding: 1em 3em;
  border-radius: 0 0 4px 4px;
  position: relative;
  display: flex;

  .col1,
  .col2 {
    flex: 1;
  }

  .col2 {
    button {
      width: 12em;
      border: 2px solid ${({ theme }) => theme.colors.illustrations.highlight};
      margin-left: auto;
      display: block;
      &:hover {
        width: 11.5em;
      }
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.size.h3};
    position: absolute;
    top: -6rem;
    left: 1rem;
    background: ${({ theme }) => theme.colors.elements.button};
    color: ${({ theme }) => theme.colors.elements.headline};
    padding: 0.2em;
    border-radius: ${({ theme }) => theme.borderRadius};
    transform: rotate(-4deg);
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  }
  p {
    padding: 0.5em;
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
    ${handleFlex("row", "flex-end", "center")};
    padding: 1em 0;
  }
  .tag {
    margin: 0.2em 0.5em;
    min-width: 3.45em;
    display: inline-block;
    text-align: center;
  }
  ${below.medium`
    ${handleFlex("column", "center", "center")};
    .col1,.col2{
      width: 100%;
    }
  `}

  ${below.small`
    padding: 1em 0;
    p{
      font-size: 1rem;
    }
  `}
`;

const CommentsWrapper = styled.div``;

const StoreProfile: React.FC<StoreProfileProps> = ({ storeData }) => {
  const { state: showComments, toggle } = useToggle();
  const { isLoggedIn, status } = useAuthState();
  const dispatch = useAuthDispatch();

  const showAlert = () => {
    dispatch({ type: "MESSAGE_HANDLER", payload: "REJECTED" });
  };
  return (
    <PageWrapper width="900px">
      {status === "REJECTED" && (
        <Alert message="you have to be logged in to leave a review" />
      )}
      <Wrapper>
        <StoreHero image={storeData.photo} />
        <StoreProfileBody>
          <h2>{storeData.name}</h2>
          <div className="col1">
            <p>{storeData.desc}</p>
            <p>
              Owner
              <span>
                {storeData.author.firstName} {storeData.author.lastName}
              </span>
            </p>
          </div>

          <div className="col2">
            <ul className="tags">
              {storeData.tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <Button textColor bgColor onClick={isLoggedIn ? toggle : showAlert}>
              Leave a Review
            </Button>
          </div>
          <CommentsWrapper>
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

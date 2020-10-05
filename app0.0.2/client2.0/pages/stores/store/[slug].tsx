import React from "react";
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
import {
  CommentsWrapper,
  StoreHero,
  StoreProfileBody,
  Wrapper,
} from "../../../components/store/storeStyles";

interface StoreProfileProps {
  storeData: Store;
}

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

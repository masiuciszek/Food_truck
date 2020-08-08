import * as React from "react";
import { GetServerSideProps } from "next";
import { NextPageContext } from "next";
import Title from "components/Title";
import RatingBar from "components/RatingBar";
import Comment from "components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { selectIsAuth } from "src/store/auth/auth.selectors";
import { Btn } from "components/styles/Btns";
import Link from "next/link";
import {
  StoreStyles,
  StoreHero,
  TitleAttached,
  Info,
  Tag,
} from "components/styles/Single.store.styles";
import { parseCookies } from "lib/parseCookies";
import {
  setAuthToken,
  setUserMessage,
  userLoaded,
} from "src/store/auth/auth.actions";
import { leaveStoreReview } from "src/store/store/store.actions";

interface Props {
  singleStore: Store;
  token: string;
}

const SingleStore = ({ singleStore, token }: Props) => {
  const [stars, setStars] = React.useState(
    Array.from(Array(5), (_, i) => i + 1),
  );
  const [selectedRate, setSelectedRate] = React.useState(0);
  const [comment, setComment] = React.useState("");

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token) {
      dispatch(setAuthToken(token));
      dispatch(userLoaded(token));
    }
  }, [token]);

  const handleSelectedRate = (star: number): void => {
    setSelectedRate(star);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (!comment && !selectedRate) {
      alert("no empty values allowed");
      dispatch(setUserMessage("No empty fields allowed"));
    } else if (comment.length < 5) {
      dispatch(setUserMessage("Please Try Again"));
    } else {
      const newRating = {
        text: comment,
        rating: selectedRate,
      };
      dispatch(leaveStoreReview(newRating, token, singleStore._id));
      setComment("");
      setSelectedRate(0);
    }
  };

  const isAuth = useSelector((state: AppState) => selectIsAuth(state));

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
        {isAuth ? (
          <>
            <RatingBar
              onStars={stars}
              onSelectedRate={selectedRate}
              onHandleSelectedRate={handleSelectedRate}
            />
            <Comment
              onComment={comment}
              onSetComment={setComment}
              onHandleSubmit={handleSubmit}
            />
          </>
        ) : (
          <>
            <h2 id="noAuthMsg">To leave a review please register</h2>
            <Link href="/register">
              <a>
                <Btn>Register</Btn>
              </a>
            </Link>
          </>
        )}
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

  const cookies = parseCookies(req!);

  return {
    singleStore: data.data,
    token: cookies.token || "",
  };
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   //
// };

export default SingleStore;

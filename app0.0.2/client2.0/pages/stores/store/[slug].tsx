import React from "react"
import { PageWrapper } from "../../../components/styled/wrappers"
import { GetServerSideProps } from "next"
import { Button } from "../../../components/styled/Buttons"
import { useToggle } from "../../../hooks/useToggle"
import CommentArea from "../../../components/store/CommentArea"
import { AnimatePresence } from "framer-motion"
import {
  useAuthState,
  useAuthDispatch,
} from "../../../context/authState/AuthProvider"
import Alert from "../../../components/elements/Alert"
import {
  CommentsWrapper,
  StoreHero,
  StoreProfileBody,
  Wrapper,
} from "../../../components/store/storeStyles"
import { parseCookies } from "../../../lib/parseCookies"
import { getMe } from "../../../context/authState/AuthActions"
import PostedComments from "../../../components/store/PostedComments"
import { checkLength } from "../../../src/utils/helperFn"

interface StoreProfileProps {
  storeData: Store
  token: string
}

const StoreProfile: React.FC<StoreProfileProps> = ({ storeData, token }) => {
  const { state: showComments, toggle } = useToggle()
  const { isLoggedIn, status } = useAuthState()
  const dispatch = useAuthDispatch()

  const showAlert = () => {
    dispatch({ type: "MESSAGE_HANDLER", payload: "REJECTED" })
  }

  React.useEffect(() => {
    if (token) {
      dispatch({ type: "SET_AUTH_TOKEN", payload: token })
      getMe(token)(dispatch)
    }
  }, [token])

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
              {showComments ? "close up" : "Leave a Review"}
            </Button>
          </div>
        </StoreProfileBody>
        <CommentsWrapper>
          <AnimatePresence>
            {showComments && (
              <CommentArea storeId={storeData._id} on={showComments} />
            )}
          </AnimatePresence>

          {storeData.reviews && checkLength(storeData.reviews)(0) && (
            <PostedComments reviews={storeData.reviews} />
          )}
        </CommentsWrapper>
      </Wrapper>
    </PageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query
  const res = await fetch(`http://localhost:4000/store/${slug}`)
  const { data } = await res.json()
  const cookies = parseCookies(ctx.req)
  return {
    props: {
      storeData: data[0],
      token: cookies.token || "",
    },
  }
}

export default StoreProfile

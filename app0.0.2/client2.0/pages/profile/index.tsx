import { AnimatePresence } from "framer-motion"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import Modal from "../../components/elements/Modal"
import Title from "../../components/elements/Title"
import Profile from "../../components/profile/Profile"
import { Page, PageWrapper } from "../../components/styled/wrappers"
import { getMe } from "../../context/authState/AuthActions"
import {
  useAuthDispatch,
  useAuthState,
} from "../../context/authState/AuthProvider"
import { useToggle } from "../../hooks/useToggle"
import { parseCookies } from "../../lib/parseCookies"
import { randomSentence } from "../../src/utils/helpers"

interface ProfilePageProps {
  token: string
}

const ProfilePage: React.FC<ProfilePageProps> = ({ token }) => {
  const { user, isLoggedIn } = useAuthState()
  const d = useAuthDispatch()
  const { state: showProfile, toggle: toggleShowProfile } = useToggle()
  const router = useRouter()

  React.useEffect(() => {
    if (token) {
      d({ type: "SET_AUTH_TOKEN", payload: token })
      getMe(token)(d)
    }
    if (!isLoggedIn) {
      router.push("/register")
    }
  }, [token])

  return (
    <>
      <Page>
        <PageWrapper>
          <Title
            className="profile-page-wrapper"
            title={`Welcome ${user?.firstName}`}
            subTitle={randomSentence()}
            handleClick={toggleShowProfile}
            actionText={`${user?.firstName}`}
          />
        </PageWrapper>

        <AnimatePresence>
          {showProfile && (
            <Modal
              dataTestId="profile-modal"
              title={`${user?.firstName} ${user?.lastName}`}
              desc="your profile"
              on={showProfile}
              toggle={toggleShowProfile}>
              <Profile />
            </Modal>
          )}
        </AnimatePresence>
      </Page>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx.req)
  return {
    props: {
      token: cookies.token || "",
    },
  }
}

export default ProfilePage

import * as React from "react"
import { GetServerSideProps } from "next"
import Title from "../components/elements/Title"
import {
  HomePageWrapper,
  Col,
  Page,
  PushDown,
} from "../components/styled/wrappers"
import { parseCookies } from "../lib/parseCookies"
import { useAuthDispatch } from "../context/authState/AuthProvider"
import { getMe } from "../context/authState/AuthActions"
import Image from "../components/elements/Image"

interface HomePageProps {
  token: string
}

const HomePage = ({ token }: HomePageProps) => {
  const dispatch = useAuthDispatch()

  React.useEffect(() => {
    if (token) {
      dispatch({ type: "SET_AUTH_TOKEN", payload: token })
      getMe(token)(dispatch)
    }
  }, [token])

  return (
    <>
      <Page>
        <HomePageWrapper>
          <Col>
            <Title
              className="main_title_home_page"
              title="Sick Tastes"
              subTitle="All different tastes"
              isCta
              ctaPath="stores"
            />
          </Col>
          <Col>
            <Image
              src="/home-hero.png"
              alt="home-hero"
              className="home-hero"
              testId="home-hero-image"
            />
          </Col>
        </HomePageWrapper>
      </Page>
      <PushDown />
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

export default HomePage

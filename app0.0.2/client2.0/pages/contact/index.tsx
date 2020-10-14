import { AnimatePresence } from "framer-motion"
import React from "react"
import { css } from "styled-components"
import Image from "../../components/elements/Image"
import Modal from "../../components/elements/Modal"
import Title from "../../components/elements/Title"
import { Col, HomePageWrapper, Page } from "../../components/styled/wrappers"
import { useToggle } from "../../hooks/useToggle"

const ContactPage = () => {
  const { state: showModal, toggle } = useToggle()
  console.log(showModal)
  return (
    <Page>
      <HomePageWrapper>
        <Col>
          <Title
            className="contact-page-title"
            title="Food stores"
            subTitle="with a special twist"
            actionText="Contact us"
            handleClick={toggle}
          />
        </Col>
        <Col>
          <Image
            src="/cool.png"
            alt="contact-page-hero-image"
            className="contact-page-image"
            style={`${css`
              width: 100%;
            `}`}
          />
        </Col>
      </HomePageWrapper>

      <AnimatePresence>
        {showModal && (
          <Modal
            on={showModal}
            toggle={toggle}
            dataTestId="contact-page-modal"
            key="contact-modal"
          />
        )}
      </AnimatePresence>
    </Page>
  )
}
export default ContactPage

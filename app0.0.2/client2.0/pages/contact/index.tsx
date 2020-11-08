import Alert from "@components/elements/Alert"
import { useAppState } from "@context/appState/appProvider"
import { AnimatePresence } from "framer-motion"
import React from "react"
import { css } from "styled-components"
import ContactForm from "@components/contact/ContactForm"
import Image from "@components/elements/Image"
import Modal from "@components/elements/Modal"
import Title from "@components/elements/Title"
import { Col, HomePageWrapper, Page, PushDown } from "../../components/styled/wrappers"
import { useTextKey } from "@hooks/useTextKey"
import { useToggle } from "@hooks/useToggle"

const ContactPage = () => {
  const { state: showModal, toggle: toggleModal } = useToggle()
  const { t } = useTextKey()
  const { status } = useAppState()

  return (
    <>
      <Page>
        {status === "RESOLVED" && (
          <Alert
            message="Your message has been sent "
            messageSecondary="We will reply as soon as possible thank you"
            styles={alertStyles}
          />
        )}
        {status === "REJECTED" && (
          <Alert
            message="Ooops something went wrong "
            messageSecondary="Could not send the message"
            styles={alertStyles}
          />
        )}
        <HomePageWrapper>
          <Col>
            <Title
              className="contact-page-title"
              title="Food stores"
              subTitle="with a special twist"
              actionText="Contact us"
              handleClick={toggleModal}
            />
          </Col>
          <Col>
            <Image
              src="/cool.png"
              alt="contact-page-hero-image"
              className="contact-page-image"
              testId="contact-page-hero-image"
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
              toggle={toggleModal}
              dataTestId="contact-page-modal"
              key="contact-modal"
              title={t("ContactUsFormTitle")}
              desc={t("ContactUsFormText")}
            >
              <ContactForm closeForm={toggleModal} />
            </Modal>
          )}
        </AnimatePresence>
      </Page>
      <PushDown />
    </>
  )
}
export default ContactPage

const alertStyles = css`
  top: 1rem;
  background: ${(props) => props.theme.colors.illustrations.secondary};
  .content {
    p {
      color: ${(props) => props.theme.colors.illustrations.main} !important;
    }
  }
`

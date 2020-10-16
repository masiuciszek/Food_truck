import React from "react"
import styled from "styled-components"
import { below } from "../src/utils/helpers"

interface Props {
  imageUrl?: string
  imageTitle?: string
  className: string
}

const Image = ({
  imageTitle = "hero",
  imageUrl = "home.png",
  className,
}: Props) => {
  return (
    <section className={className}>
      <img src={`/${imageUrl}`} alt={imageTitle} />
    </section>
  )
}

export default styled(Image)`
  flex: 1;
  ${below.medium`
    width: 90%;
    img{
      width: 100%;
    }
  `}
`

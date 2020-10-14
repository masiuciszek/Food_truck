import React from "react"
import styled from "styled-components"

interface ImageProps {
  src: string
  alt?: string
  className?: string
  style?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "some-image",
  className = "className",
  style = "",
}) => {
  console.log(style)
  return <img src={src} alt={alt} className={className} />
}
export default styled(Image)`
  ${({ style }) => style}
`

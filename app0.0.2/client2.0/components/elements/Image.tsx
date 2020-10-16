import React from "react"
import styled from "styled-components"

interface ImageProps {
  src: string
  alt?: string
  className?: string
  style?: string
  testId: string
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "some-image",
  className = "className",
  style = "",
  testId,
}) => {
  return <img src={src} alt={alt} className={className} data-testid={testId} />
}
export default styled(Image)`
  ${({ style }) => style}
`

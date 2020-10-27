import React from "react"
import cn from "classnames"
import styled from "styled-components"

interface BlogAlertProps {
  preview?: boolean
}

const Section = styled.section``
const Container = styled.div``

const BlogAlert: React.FC<BlogAlertProps> = ({ preview }) => {
  return (
    <Section>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors">
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                // href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors">
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </Section>
  )
}
export default BlogAlert

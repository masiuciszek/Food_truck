import React from "react"
import Meta from "./Meta"
import styled from "styled-components"
import Head from "next/head"

interface BlogLayoutProps {
  preview?: boolean
  data: FrontMatter
}

const BlogWrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidthPage};
  margin: 3em auto 5em auto;
`

const Article = styled.article``

const BlogLayout: React.FC<BlogLayoutProps> = ({ preview, children, data }) => {
  const handleTitle = (title: string) => title.split(" ").slice(0, 3).join("-") + "..."
  return (
    <>
      <Meta />
      <BlogWrapper>
        <Head>
          <title>{handleTitle(data.title)}</title>
          <meta title="description" content={data.desc} />
        </Head>
        <Article>{children}</Article>
      </BlogWrapper>
    </>
  )
}
export default BlogLayout

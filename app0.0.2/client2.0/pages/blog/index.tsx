import { GetStaticProps, NextPage } from "next"
import Title from "@components/elements/Title"
import { Page } from "@components/styled/wrappers"
import { parsedMarkDownHandler, readDir } from "../../lib/api"
import styled from "styled-components"
import { handleFlex } from "@utils/helpers"
import { useState } from "react"
import PostItem from "@components/blog/PostItem"
import Paginate from "@components/blog/Paginate"

interface BlogPageProps {
  frontmatter: FrontMatter[]
}

const BlogPageStyles = styled(Page)`
  flex-direction: column;
`

const PostList = styled.ul`
  width: 100%;
  font-size: 1rem;
  padding: 0;
  ${handleFlex("column", "center", "center")};
  width: 100%;
  margin: 0 auto;
  }
`
// asdasd
function name(params: type) {}
const BlogPage: NextPage<BlogPageProps> = ({ frontmatter }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const postsToRender = frontmatter.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <BlogPageStyles>
      <Title
        className="Blog-page-title"
        title="Sick tastes Blog"
        subTitle="content with a small twist"
      />
      <PostList>
        <PostItem posts={postsToRender} />
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={frontmatter.length}
          paginate={paginate}
        />
      </PostList>
    </BlogPageStyles>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = readDir("posts").map((post) => post.replace(".md", ""))

  const postFrontMatter = posts.map((p) => {
    const parsed = p.replace(".md", "")
    const { data } = parsedMarkDownHandler(parsed)
    return data
  })

  return {
    props: {
      frontmatter: postFrontMatter,
    },
  }
}

export default BlogPage

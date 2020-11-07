import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import { handleMarkDown, readFiles } from "../../lib/api"
import BlogLayout from "@components/blog/BlogLayout"
import fs from "fs"
import Link from "next/link"
import styled from "styled-components"

interface BlogPostProps {
  contents: string
  data: FrontMatter
  htmlContent: string
  allPostsSlug: string[]
}

interface BlogNavigationProps {
  isFirst: boolean
  isLast: boolean
}

const BlogNavigation = styled.div<BlogNavigationProps>`
  margin: 2rem auto;
  display: flex;
  ${({ isFirst, isLast }) => !isFirst && !isLast && `justify-content: space-between;`};

  a {
    font-size: 1.5em;
    transition: ${({ theme }) => theme.transition.mainTransition};
    display: block;
    ${({ isFirst }) => isFirst && `margin-left: auto;`};
    ${({ isLast }) => isLast && `margin-right: auto;`};
    &:hover {
      color: ${({ theme }) => theme.colors.illustrations.highlight};
      transform: scale(1.025);
    }
  }
`

const BlogPost: NextPage<BlogPostProps> = ({ contents, data, htmlContent, allPostsSlug }) => {
  const router = useRouter()

  if (router.isFallback && !data) {
    return <ErrorPage statusCode={404} />
  }

  const firstPost = allPostsSlug[0]
  const lastPost = allPostsSlug[allPostsSlug.length - 1]
  const currentPostIndex = allPostsSlug.indexOf(data.slug.replace("/", ""))
  const currentPost = allPostsSlug[currentPostIndex]
  const isFirst = firstPost === currentPost
  const isLast = lastPost === currentPost

  return (
    <BlogLayout data={data}>
      {router.isFallback ? (
        <h2>...Loading</h2>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      )}

      <BlogNavigation isFirst={isFirst} isLast={isLast}>
        {!isFirst && (
          <Link href={`/blog/${allPostsSlug[currentPostIndex - 1]}`}>
            <a>← {allPostsSlug[currentPostIndex - 1]}</a>
          </Link>
        )}

        {!isLast && (
          <Link href={`/blog/${allPostsSlug[currentPostIndex + 1]}`}>
            <a>{allPostsSlug[currentPostIndex + 1]} → </a>
          </Link>
        )}
      </BlogNavigation>
    </BlogLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = readFiles()

  return {
    paths,
    fallback: false, // build on buildtime
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx

  const fallbackData: FrontMatter = {
    title: "post not found",
    desc: "",
    slug: "/",
    date: "",
    author: { name: "" },
  }

  if (!params?.slug) {
    return {
      props: {
        contents: "",
        data: fallbackData,
        htmlContent: "",
      },
    }
  }
  const { slug } = params
  const { parsedMarkDown, htmlContent } = handleMarkDown(slug as string)

  const allPostsSlug = fs.readdirSync("posts").map((post) => post.replace(".md", ""))

  return {
    props: {
      contents: parsedMarkDown.content,
      data: parsedMarkDown.data,
      htmlContent,
      allPostsSlug,
    },
  }
}

export default BlogPost

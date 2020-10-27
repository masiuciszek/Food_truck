import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { GetStaticPaths, GetStaticProps } from "next"
import { GrayMatterFile } from "gray-matter"
import { handleMarkDown, readFiles } from "../../lib/api"
import BlogLayout from "../../components/blog/BlogLayout"

interface BlogPostProps {
  contents: GrayMatterFile<string>
  data: FrontMatter
  htmlContent: string
}

const BlogPost = ({ contents, data, htmlContent }: BlogPostProps) => {
  const router = useRouter()

  if (router.isFallback && !data) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <BlogLayout preview data={data}>
      {router.isFallback ? (
        <h2>...Loading</h2>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      )}
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

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const { parsedMarkDown, htmlContent } = handleMarkDown(slug)
  return {
    props: {
      contents: parsedMarkDown.content,
      data: parsedMarkDown.data,
      htmlContent,
    },
  }
}

export default BlogPost

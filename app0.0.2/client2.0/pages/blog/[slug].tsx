import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import fs from "fs"
import path from "path"
import matter, { GrayMatterFile } from "gray-matter"
import marked from "marked"

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

  const handleTitle = (title: string) =>
    title.split(" ").slice(0, 3).join("-") + "..."

  return (
    <>
      {router.isFallback ? (
        <h2>...Loading</h2>
      ) : (
        <>
          <article>
            <Head>
              <title>{handleTitle(data.title)}</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
              <meta title="description" content={data.desc} />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            {/* <pre>{contents}</pre> */}
          </article>
        </>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts")
  const paths = files.map((post) => ({
    params: { slug: post.replace(".md", "") },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const rawMarkDown = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString()

  const parsedMarkDown = matter(rawMarkDown)
  const htmlContent = marked(parsedMarkDown.content)
  return {
    props: {
      contents: parsedMarkDown.content,
      data: parsedMarkDown.data,
      htmlContent,
    },
  }
}

export default BlogPost

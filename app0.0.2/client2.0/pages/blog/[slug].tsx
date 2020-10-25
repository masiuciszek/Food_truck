import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"

interface BlogPostProps {
  post: Post
  morePosts: Post[]
  preview?: boolean
}

const BlogPost = ({ post, preview, morePosts }: BlogPostProps) => {
  const router = useRouter()

  if (router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
        <h2>...Loading</h2>
      ) : (
        <>
          <article>
            <Head>
              <title>Some dynamic title here</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <h1>Hello there</h1>
          </article>
        </>
      )}
    </>
  )
}

export default BlogPost

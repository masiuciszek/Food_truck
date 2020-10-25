import Link from "next/link"
import { Page } from "../../components/styled/wrappers"

const BlogPage = () => (
  <Page>
    <Link href="/blog/beer">
      <a>go to post beer ore slug</a>
    </Link>
  </Page>
)

export default BlogPage

import React from "react"
import BlogAlert from "./BlogAlert"
import Meta from "./Meta"

interface BlogLayoutProps {
  preview: boolean
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <BlogAlert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}
export default BlogLayout

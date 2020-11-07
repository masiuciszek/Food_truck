import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"

export const readDir = (dir: string) => {
  return fs.readdirSync(dir)
}

export const readFiles = () => {
  const files = readDir("posts")
  const paths = files.map((post) => ({
    params: { slug: post.replace(".md", "") },
  }))
  return paths
}

export const parsedMarkDownHandler = (slug: string) => {
  const rawMarkDown = fs.readFileSync(path.join("posts", slug + ".md")).toString()
  const parsedMarkDown = matter(rawMarkDown)

  return parsedMarkDown
}

export const handleMarkDown = (slug: string) => {
  const rawMarkDown = fs.readFileSync(path.join("posts", slug + ".md")).toString()

  const parsedMarkDown = matter(rawMarkDown)
  const htmlContent = marked(parsedMarkDown.content)
  return {
    rawMarkDown,
    parsedMarkDown,
    htmlContent,
  }
}

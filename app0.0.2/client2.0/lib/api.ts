import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = () => join(process.cwd(), "_posts")

export function getPostSlugs(postsDirectory: () => string) {
  const correctPath = postsDirectory()
  return fs.readdirSync(correctPath)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const correctPath = postsDirectory()

  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(correctPath, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items: Items<string> = {}
}

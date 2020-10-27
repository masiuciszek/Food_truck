import { User } from "./userTypes"

export interface Post {
  authorId: number
  content: string
  id: number
  published: boolean
  title: string
  author: User["id"]
}

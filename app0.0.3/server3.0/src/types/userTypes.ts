import { Pet, Post } from "@prisma/client"

export interface User {
  email: string
  id: number
  name: string
  posts?: Post[]
  pets?: Pet[]
}

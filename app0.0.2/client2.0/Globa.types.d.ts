interface Link {
  name: string
  path: string
}

type FnVoid = () => void
type Role = "USER" | "ADMIN"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  role: ROLE
}

type Status =
  | "LOADING"
  | "PENDING"
  | "RESOLVED"
  | "QUESTION"
  | "REJECTED"
  | "NATURAL"
  | "EMPTY"

interface LoginFormData {
  email: string
  password: string
}
interface RegisterFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

type Rating = "one" | "two" | "three" | "four" | "five"

interface Review {
  rating: number
  _id: string
  text: string
  author: User
}

interface Store {
  rating: Rating
  tags: string[]
  _id: string
  name: string
  address: string
  photo: string
  desc: string
  author: User
  slug: string
  __v: 0
  id: string
  reviews?: Review[]
}

interface NewUserValues {
  firstName: string
  lastName: string
  email: string
}

type FormDataType = RegisterFormData | LoginFormData

interface Post {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

interface Items<T> {
  [key: string]: T
}

interface BlogParams {
  params: {
    slug: string
  }
}

interface FrontMatter {
  title: string
  desc: string
  slug: string
  date: string
  author: { name: string }
}

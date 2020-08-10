type Fn = () => void;

type Theme = "LIGHT" | "DARK";

type Gender = "MALE" | "FEMALE";

type AppLink = "home" | "about" | "stores" | "top" | "blog";

type SocialType = "twitter" | "instagram" | "github";

type Status = "rejected" | "resolved" | "pending" | "passive" | "";

type StoreType = "FRIENDLY" | "LOVELY" | "FAMILY" | "SPORTS_FAN";

interface Store {
  type: StoreType;
  _id: string;
  name: string;
  owner: {
    _id: string;
    firstName: string;
    lastName?: string;
    email: string;
  };
  reviews?: Review[];
  image: Buffer;
  imageString?: string;
  createdAt: Date;
}

interface LinkType<T> {
  name: T;
  path: string;
}

type Role = "USER" | "ADMIN" | "MASTER";

type StoreType = "FRIENDLY" | "LOVELY" | "FAMILY" | "SPORTS_FAN";

interface Token {
  token: string;
}
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: Gender;
  role: Role;
  tokens: Token[];
  avatar: Buffer | undefined;
  createdAt: Date;
}

interface RegisterLoginResponse {
  success: boolean;
  msg: string;
  data: User;
  token: string;
}

interface RegisterFormData {
  gender: Gender;
  role: Role;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type UserMessage =
  | "Please Try Again"
  | "Success"
  | "Ooops Something went wrong"
  | "reset token sent to your email"
  | "input invalid"
  | "No empty fields allowed"
  | "Are you sure?"
  | "";

interface TokenResponse {
  success: boolean;
  token: string;
}

interface UserLoadedResponse {
  success: boolean;
  msg: string;
  data: User;
}

interface LoginData {
  email: string;
  password: string;
}

type ModalBodyType = "forgot password" | "";

interface Review {
  _id: string;
  text: string;
  rating: number;
  author: User;
  store: Store;
  createdAt: Date;
}

interface Empty {
  found: boolean;
}

type Maybe<T> = Empty | T;

// for submitting
interface ReviewData {
  text: string;
  rating: number;
}

interface EditFormBody {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
}

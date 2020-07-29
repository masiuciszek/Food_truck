import { Document } from "mongoose";

export type Gender = "MALE" | "FEMALE";

export type Role = "USER" | "ADMIN" | "MASTER";

export type StoreType = "FRIENDLY" | "LOVELY" | "FAMILY" | "SPORTS_FAN";

export interface Token {
  token: string;
}

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: Gender;
  role: Role;
  age: number;
  tokens: Token[];
  avatar: Buffer | undefined;
  resetPasswordToken: string | undefined;
  resetPasswordExpire: number | undefined;
  createdAt: Date;
  generateAuthToken: () => Promise<string>;
  comparePassword: (password: string) => Promise<boolean>;
  getResetPasswordToken: () => string;
}

export interface Store extends Document {
  name: string;
  slug: string;
  owner: User["_id"];
  type: StoreType;
  image: Buffer | undefined;
  createdAt: Date;
}

export interface Review extends Document {
  author: User["_id"];
  store: Store["_id"];
  createdAt: Date;
  text: string;
  rating: number;
}

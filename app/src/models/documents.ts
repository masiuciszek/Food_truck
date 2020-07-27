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
  resetPasswordToken: string;
  resetPasswordExpire: number;
  createdAt: Date;
  generateAuthToken: () => Promise<string>;
  comparePassword: (password: string) => Promise<boolean>;
  getResetPasswordToken: () => string;
}

export interface Store extends Document {
  name: string;
  slug: string;
  owner: User;
  type: StoreType;
  createdAt: Date;
}

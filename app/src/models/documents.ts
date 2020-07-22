import { Document } from 'mongoose';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MASTER = 'MASTER',
}

interface Token {
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
  createdAt: Date;
  generateAuthToken: () => Promise<string>;
}

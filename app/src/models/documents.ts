import { Document } from 'mongoose';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
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
  age: number;
  tokens: Token[];
  createdAt: Date;
}

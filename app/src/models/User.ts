import { NextFunction } from 'express';
import mongoose, { Schema } from 'mongoose';
import { User } from './documents';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: ['pleas fill in your firstName', true],
  },
  lastName: {
    type: String,
    required: ['pleas fill in your lastName', true],
  },
  email: {
    type: String,
    required: ['pleas fill in your email', true],
    unique: true,
  },
  password: {
    type: String,
    required: ['pleas fill in your password', true],
    minlength: 5,
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    default: 'MALE',
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN', 'MASTER'],
    default: 'USER',
  },
  age: {
    type: Number,
    min: 18,
    required: ['pleas fill in your age', true],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware that is binned tou our user schema

// Hash password before registered
UserSchema.pre<User>('save', async function (next: NextFunction) {
  const user = this;

  const salt = await bcrypt.genSalt(8);
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

const userModel = mongoose.model<User>('User', UserSchema);

export { userModel };

import mongoose, { Schema } from 'mongoose';
import { User } from './documents';

const userSchema = new Schema<User>({
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
  age: {
    type: Number,
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

const userModel = mongoose.model<User>('User', userSchema);

export { userModel };

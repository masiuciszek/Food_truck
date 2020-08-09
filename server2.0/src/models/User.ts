import { Schema, Model, Document, model } from "mongoose";

type Role = "USER" | "ADMIN";
interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  resetToken: string;
  expireToken: string;
  role: Role;
  createdAt: Date;
}

interface IUser extends Model<User> {
  foo: () => string;
}

const userSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    resetToken: String,
    expireToken: String,
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

userSchema.statics.foo = function () {
  return "hello world!";
};

const userModel = model<User, IUser>("User", userSchema);
export default userModel;

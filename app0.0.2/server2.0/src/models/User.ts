import { Schema, Model, Document, model, HookNextFunction } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";
import Store from "./Store";

type Role = "USER" | "ADMIN";
export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  resetToken: string;
  expireToken: string;
  role: Role;
  createdAt: Date;
  generateAuthToken: () => Promise<string>;
  comparePasswords: (password: string) => Promise<boolean>;
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
      unique: true,
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

userSchema.pre<User>("save", async function (next: HookNextFunction) {
  const user = this;
  const salt = await bcrypt.genSalt(8);
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, salt);
  }

  next();
});

userSchema.methods.generateAuthToken = async function (): Promise<string> {
  const user = this;
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "24h" },
  );

  await user.save();
  return token;
};

userSchema.methods.comparePasswords = async function (
  password: string,
): Promise<boolean> {
  const user = this;
  const isMatch = await bcrypt.compare(password, user.password);

  return isMatch;
};

userSchema.statics.foo = async function () {
  return "hello world!";
};

// remove all the stores whe user profile get's removed
userSchema.pre<User>("remove", async function (next: HookNextFunction) {
  console.log(`Stores being removed from User ${this._id}`);

  await Store.deleteMany({ author: this._id });
  next();
});

const userModel = model<User, IUser>("User", userSchema);
export default userModel;

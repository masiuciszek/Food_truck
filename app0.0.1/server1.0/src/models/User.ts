import mongoose, { HookNextFunction, Schema } from "mongoose";
import { User } from "./documents";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Store } from "./Store";
import "dotenv/config";

const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: ["pleas fill in your firstName", true],
  },
  lastName: {
    type: String,
    required: ["pleas fill in your lastName", true],
  },
  email: {
    type: String,
    required: ["pleas fill in your email", true],
    unique: true,
  },
  password: {
    type: String,
    required: ["pleas fill in your password", true],
    minlength: 5,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE"],
    default: "MALE",
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "MASTER"],
    default: "USER",
  },

  avatar: {
    type: Buffer,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware that is binned tou our user schema
// Encrypt password
// Hash password before registered
UserSchema.pre<User>("save", async function (next: HookNextFunction) {
  const user = this;

  const salt = await bcrypt.genSalt(8);
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

// Generate a new token for a log in session ore register
UserSchema.methods.generateAuthToken = async function (): Promise<string> {
  const user = this;
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET!,
    {
      expiresIn: "3h",
    },
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

UserSchema.methods.comparePassword = async function (
  password: string,
): Promise<boolean> {
  const user = this;

  const isMatched = await bcrypt.compare(password, user.password);

  return isMatched;
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Remove all stores that belongs to the user
UserSchema.pre("remove", async function (next: HookNextFunction) {
  await Store.deleteMany({ user: this._id });

  next();
});

const userModel = mongoose.model<User>("User", UserSchema);

export { userModel };

import { Response } from "express";
import { User as UserType } from "../models/User";

// Set cookie as a header en generate new token

async function tokenResponse(
  user: UserType,
  statusCode: number,
  res: Response,
) {
  const token = await user.generateAuthToken();

  let date = new Date();

  const options = {
    expire: date.setHours(date.getHours() + 24),
    httpOnly: false,
    secure: false,
  };

  if (process.env.NODE_ENV === "production") {
    options.httpOnly = true;
    options.secure = true;
  }
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, user, token });
}

export default tokenResponse;

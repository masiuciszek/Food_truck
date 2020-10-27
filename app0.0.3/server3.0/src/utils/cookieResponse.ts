import { User } from "@prisma/client"
import { Response } from "express"
import generateToken from "./generateToken"

const cookieResponse = async (
  user: User,
  statusCode: number,
  res: Response
) => {
  const token = generateToken(user)

  let date = new Date()

  const options = {
    expire: date.setHours(date.getHours() + 24),
    httpOnly: false,
    secure: false,
  }

  if (process.env.NODE_ENV === "production") {
    options.httpOnly = true
    options.secure = true
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, user, token })
}

export default cookieResponse

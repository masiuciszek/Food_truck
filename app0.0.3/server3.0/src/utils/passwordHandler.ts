import { User } from "@prisma/client"
import bcrypt from "bcryptjs"
import { NextFunction, Request, Response } from "express"

export const comparePassword = async (user: User, password: string) => {
  return await bcrypt.compare(password, user.password)
}

export const hashPassword = async (user: User) => {
  const salt = await bcrypt.genSalt(8)
  user.password = await bcrypt.hash(user.password, salt)
}

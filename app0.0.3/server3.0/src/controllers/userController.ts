import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import generateToken from "../utils/generateToken"
import { hashPassword } from "../utils/passwordHandler"

export const getUsers = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json("server error")
    console.error(err)
  }
}

export const getUserById = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const idParam = parseInt(req.params.userId, 10)
    const user = await prisma.user.findOne({ where: { id: idParam } })
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json("server error")
    console.error(err)
  }
}

export const register = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, password } = req.body
    console.log(password)
    const user = await prisma.user.findOne({ where: { email } })
    if (user) {
      throw new Error(`user already exits with email ${email}`)
    }

    const newUser = await prisma.user.create({
      data: { name, email, password },
    })

    const { authToken } = generateToken(newUser)

    res.status(201).json({ success: true, data: { newUser, authToken } })
  } catch (err) {
    res.status(500).json("server error")
    console.error(err)
  }
}

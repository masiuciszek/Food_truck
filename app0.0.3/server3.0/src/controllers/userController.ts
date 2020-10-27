import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express"

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

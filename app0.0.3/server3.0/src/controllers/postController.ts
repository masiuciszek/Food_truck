import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express"

export const getPosts = (prisma: PrismaClient) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json("server error")
  }
}

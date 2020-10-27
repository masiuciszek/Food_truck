import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import * as userController from "../controllers/userController"
import * as postController from "../controllers/postController"
const prisma = new PrismaClient()

const userRouter = Router()
const postRouter = Router()

userRouter.route("/").get(userController.getUsers(prisma))
postRouter.route("/").get(postController.getPosts(prisma))

export { userRouter, postRouter }

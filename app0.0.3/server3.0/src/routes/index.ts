import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import * as userController from "../controllers/userController"
import * as postController from "../controllers/postController"
import { preSaveUser, routeInfo } from "../middleware/prismaMiddleware"

const prisma = new PrismaClient()

routeInfo(prisma) // middleware
preSaveUser(prisma) // middleware

const userRouter = Router()
const postRouter = Router()

// Users
userRouter.route("/").get(userController.getUsers(prisma))
userRouter.route("/:userId").get(userController.getUserById(prisma))
userRouter.route("/register").post(userController.register(prisma))

// Posts
postRouter.route("/").get(postController.getPosts(prisma))

export { userRouter, postRouter }

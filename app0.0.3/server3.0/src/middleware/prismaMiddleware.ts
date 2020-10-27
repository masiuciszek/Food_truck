import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

export const routeInfo = (prisma: PrismaClient) => {
  prisma.$use(async (params, next) => {
    const before = Date.now()
    const result = await next(params)
    const after = Date.now()
    console.log(
      `Query ${params.model}.${params.action} took ${after - before}ms`
    )
    return result
  })
}

export const preSaveUser = (prisma: PrismaClient) => {
  prisma.$use(async (params, next) => {
    if (params.model == "User" && params.action == "create") {
      params.args.data.password = await bcrypt.hash(
        params.args.data.password,
        8
      )
    }
    return next(params)
  })
}

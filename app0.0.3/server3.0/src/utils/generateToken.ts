import jwt from "jsonwebtoken"
import "dotenv/config"
import { User } from "@prisma/client"

const generateToken = (user: User) => {
  const authToken = jwt.sign({ userId: user.id }, process.env.JWT_AUTH_TOKEN!, {
    expiresIn: "24H",
  })

  return { authToken }
}

export default generateToken

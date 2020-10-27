import { User } from "@prisma/client"
import bcrypt from "bcryptjs"

export const comparePassword = async (user: User, password: string) => {
  return await bcrypt.compare(password, user.password)
}

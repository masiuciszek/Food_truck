import { PrismaClient } from "@prisma/client"
import express, { Request } from "express"

const app = express()

app.use(express.json())

const prisma = new PrismaClient()

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: { pets: true },
  })
  res.json(users)
})

app.post("/register", async (req, res) => {
  const { name, email } = req.body
  const newUser = await prisma.user.create({
    data: { name, email },
  })
  res.status(201).json(newUser)
})

app.post("/add_pet", async (req, res) => {
  const { breed, name, ownerId } = req.body
  const newPet = await prisma.pet.create({
    data: { breed, name, owner: { connect: { id: ownerId } } },
  })
  res.json(newPet)
})

app.listen(3000, () =>
  console.log("🚀 Server ready at: http://localhost:3000\n⭐️ ")
)

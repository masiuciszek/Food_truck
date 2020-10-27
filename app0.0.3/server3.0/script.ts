import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const profile = await prisma.profile.findMany()
  const pets = await prisma.pet.findMany()
  // const newPet = await prisma.pet.create({
  //   data: { name: "Korek", breed: "kundel" },
  // })

  // console.log(profile)
  console.log(pets)
  // console.log(newPet)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

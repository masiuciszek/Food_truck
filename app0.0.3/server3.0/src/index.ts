import express from "express"
import cors from "cors"
import { userRouter, postRouter } from "./routes"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/posts", postRouter)

app.listen(3000, () =>
  console.log("🚀 Server ready at: http://localhost:3000\n⭐️ ")
)

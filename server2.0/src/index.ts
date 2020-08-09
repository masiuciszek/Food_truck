import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import connectDb from "./config/connectDB";
import cookiesParser from "cookie-parser";
const app: Application = express();

const port = process.env.PORT || 4000;

app.use(cookiesParser());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

(async () => {
  await connectDb();
})();

// app.use(errorHandler);

app.listen(port, () => {
  console.log(`port is on localhost ${port}`);
});

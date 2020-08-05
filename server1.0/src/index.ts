import express, { Application } from "express";
import connectDb from "./db";
import { errorHandler } from "./middleware/error";
import { router as authRoutes } from "./routes/auth.route";
import { router as userRoutes } from "./routes/user.routes";
import { router as masterRoutes } from "./routes/master.routes";
import { router as storeRoutes } from "./routes/store.routes";
import { router as reviewRoutes } from "./routes/review.routes";
import cors from "cors";
import cookiesParser from "cookie-parser";

const app: Application = express();

const port = process.env.PORT || 4000;

(async () => {
  await connectDb();
})();

app.use(cookiesParser());
app.use(cors());
app.use(express.json());

// TODO: DELETE
app.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Yooo" },
    { id: 2, name: "Coool" },
  ]);
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/master", masterRoutes);
app.use("/review", reviewRoutes);
app.use("/store", storeRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`port is on localhost ${port}`);
});

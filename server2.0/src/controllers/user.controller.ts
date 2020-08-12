import { Request, Response, NextFunction } from "express";
import asyncHandler from "middleware/asyncHandler";
import User from "../models/User";

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email && !password) throw Error("oooo");

    let user = await User.findOne({ email });

    if (user) {
      throw new Error("User already exits");
    }

    let newUser = await User.create(req.body);

    await newUser.save();

    res.status(200).send(newUser);
  },
);

import { Request, Response, NextFunction } from "express";
import User from "../models/User";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) throw Error("oooo");

    let user = await User.findOne({ email });

    if (user) {
      throw new Error("User already exits");
    }

    let newUser = await User.create(req.body);

    await newUser.save();

    res.status(200).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

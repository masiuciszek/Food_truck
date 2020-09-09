import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils/ErrorResponse";
import asyncHandler from "./asyncHandler";
import jwt from "jsonwebtoken";
import User, { User as UserType } from "../models/User";
import "dotenv/config";

export interface AuthRequest extends Request {
  user: UserType;
}

const authHandler = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.token) {
      token = req.cookies?.token;
    } else {
      return next(new ErrorResponse("Auth Error", 401));
    }

    // Make sure token exists
    if (!token) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401),
      );
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401),
      );
    }

    req.user = user;

    next();
  },
);

export default authHandler;

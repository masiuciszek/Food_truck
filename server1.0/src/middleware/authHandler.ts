import { NextFunction, Request } from "express";
import asyncHandler from "./asyncHandler";
import jwt from "jsonwebtoken";
import { Gender, User, Token } from "../models/documents";
import { ErrorResponse } from "../utils/errorResponse";
import { userModel as UserModel } from "../models/User";
import "dotenv/config";

export interface AuthRequest extends Request {
  user: User;
  token?: string;
}

interface Decoded {
  id: string;
  role: Gender;
  iat: number;
  exp: number;
}

type D = Decoded;

const authHandler = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      return next(new ErrorResponse("Auth Error", 401));
    }

    if (!token) {
      throw new Error("No Bearer Token");
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await UserModel.findOne({
      _id: decoded.id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("Not Authorized");
    }

    req.user = user;
    req.token = token;

    next();
  },
);

export default authHandler;

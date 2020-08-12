import { Request, Response, NextFunction } from "express";
import { User as UserType } from "../models/User";

type Fn = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const asyncHandler = (fn: Function) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;

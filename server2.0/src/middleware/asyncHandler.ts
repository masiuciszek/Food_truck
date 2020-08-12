import { Request, Response, NextFunction } from "express";

type Fn = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const asyncHandler = (fn: Fn) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;

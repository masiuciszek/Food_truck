import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "utils/ErrorResponse";

const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error = { ...err };
  error.message = err.message;

  // TODO: DELETE!!!
  console.log("ERROR", error);

  res
    .status(err.statusCode || 500)
    .json({ success: false, error: error.message });

  next();
};

export default errorHandler;

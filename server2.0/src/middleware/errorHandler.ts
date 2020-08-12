import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utils/ErrorResponse";

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

  if (error.code === 11000) {
    let message = `User already exits!`;
    error = new ErrorResponse(message, 401);
  }

  if (error.name === "JsonWebTokenError") {
    let message = `Authentication error`;
    error = new ErrorResponse(message, 401);
  }

  res
    .status(err.statusCode || 500)
    .json({ success: false, error: error.message });

  next();
};

export default errorHandler;

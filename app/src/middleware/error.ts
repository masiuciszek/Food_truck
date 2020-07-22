import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils/errorResponse';

export const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error = { ...err };
  error.message = err.message;

  // TODO: DELETE!
  console.log(error);
  if (error.code === 11000) {
    const message = 'You are already registered!';
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'SERVER_ERROR!!!' });

  next();
};

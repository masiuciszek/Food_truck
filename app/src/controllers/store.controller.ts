import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import { userModel as User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";

/**
 * @method --- POST
 * @access --- Private
 * @route --- store/create_new_store
 * @desc Must be a amin to create a store
 */
export const createStore = asyncHandler(
  async (req: AuthRequest, req: Request, next: NextFunction) => {
    // /
  },
);

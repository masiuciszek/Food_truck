import { Request, Response, NextFunction } from "express";
import tokenResponse from "../utils/jsonTokenResponse";
import asyncHandler from "../middleware/asyncHandler";
import User from "../models/User";

/**
 * @method POST
 * @route /user/register
 * @desc register new user
 * @status public
 */

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create(req.body);

    tokenResponse(newUser, 200, res);
  },
);

/**
 * @method GET
 * @route /user/all
 * @desc get all users
 * @status public
 */

export const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const allUsers = await User.find({});

    res.status(200).json({ success: true, data: allUsers });
  },
);

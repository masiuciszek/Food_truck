import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import { userModel as User } from '../models/User';
import { ErrorResponse } from '../utils/errorResponse';

/**
 * @method --- POST
 * @access --- Public
 * @route --- user/register
 */

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create(req.body);

    // Create new Token
    await newUser.generateAuthToken();

    res
      .status(201)
      .json({ success: true, msg: 'User Registered!', data: newUser });
  },
);

/**
 * @method --- GET
 * @access --- Public
 * @route --- user/all_users
 */

export const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find({});

    res.status(200).json({ success: true, msg: 'All Users', data: users });
  },
);

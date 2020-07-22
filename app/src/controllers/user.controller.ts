import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import { AuthRequest } from '../middleware/authHandler';
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
    let token = await newUser.generateAuthToken();

    res
      .status(201)
      .json({ success: true, msg: 'User Registered!', data: newUser, token });
  },
);

/**
 * @method --- GET
 * @desc --- GET user by id
 * @access --- Private
 * @route --- user/me
 */

export const getMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user._id).select('');
    res.status(200).json({ success: true, msg: 'Get me', data: user });
  },
);

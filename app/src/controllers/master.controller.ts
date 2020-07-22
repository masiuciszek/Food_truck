import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import { AuthRequest } from '../middleware/authHandler';
import { userModel as User } from '../models/User';
import { ErrorResponse } from '../utils/errorResponse';

/**
 * @method --- DELETE
 * @access --- Private
 * @route --- /master/delete_all_users
 * @desc --- Ban all users
 */

export const deleteAllUsers = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    res.send('master');
  },
);

/**
 * @method --- GET
 * @access --- Private
 * @route --- master/all_users
 */

export const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find({});

    res.status(200).json({ success: true, msg: 'All Users', data: users });
  },
);

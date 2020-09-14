import { Request, Response, NextFunction } from "express";
import tokenResponse from "../utils/jsonTokenResponse";
import asyncHandler from "../middleware/asyncHandler";
import User from "../models/User";
import Store from "../models/Store";
import { AuthRequest } from "../middleware/authHandler";
import { ErrorResponse } from "../utils/ErrorResponse";

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
    User.foo();
    res.status(200).json({ success: true, data: allUsers });
  },
);

/**
 * @method DELETE
 * @route /user/delete_me
 * @desc delete profile and all stores that belong to the user
 * @status private
 */

export const deleteMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new ErrorResponse(`no user with id ${req.params.id}`, 404));
    }
    await Store.deleteMany({ author: req.user._id });

    await User.findByIdAndDelete(req.user.id);

    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: false, // TODO: CHANGE IN PRODUCTION
    });

    res.status(200).json({
      success: true,
      data: {
        msg: `user deleted with id ${req.user.id}`,
      },
    });
  },
);

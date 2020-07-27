import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import { User as UserType } from "../models/documents";
import { userModel as User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { jsonResponse } from "../utils/helpers";

/**
 * @method --- POST
 * @access --- Public
 * @route --- user/register
 * @desc --- register new user
 */

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create(req.body);

    // Create new Token
    let token = await newUser.generateAuthToken();

    res
      .status(201)
      .json({ success: true, msg: "User Registered!", data: newUser, token });
  },
);

/**
 * @method --- GET
 * @desc --- get user profile
 * @access --- Private
 * @route --- user/me
 */

export const getMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user._id).select("-password -tokens");
    res.status(200).json({ success: true, msg: "Get me", data: user });
  },
);

/**
 * @method --- PUT
 * @desc --- update user profile
 * @access --- Private
 * @route --- user/me/update
 */

export const updateMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }

    user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      success: true,
      msg: `${user?.firstName} got updated!`,
      data: user,
    });
  },
);

/**
 * @method --- POST
 * @desc --- update password
 * @access --- Private
 * @route --- user/me/update_password
 */

export const updatePassword = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorResponse(`password incorrect`, 404));
    }

    user.password = req.body.password;
    await user.save();

    res.status(200).json({ success: true, message: "password updated" });

    jsonResponse<UserType>(res, 200, true, "password updated", user);
  },
);

/**
 * @method --- POST
 * @desc --- forgot password
 * @access --- Public
 * @route --- user/me/forgot_password
 */

/**
 * @method --- POST
 * @desc --- reset password
 * @access --- Public
 * @route --- user/me/reset_password/:resetPasswordToken
 */

/**
 * @method --- Delete
 * @desc --- remove user profile
 * @access --- Private
 * @route --- user/me/remove
 */

export const removeMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }

    await User.findByIdAndRemove(req.user._id);

    res
      .status(200)
      .json({ success: true, msg: `${user.firstName} got removed`, data: {} });
  },
);

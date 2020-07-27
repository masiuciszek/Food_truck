import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import { User as UserType } from "../models/documents";
import { userModel as User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { jsonResponse } from "../utils/helpers";
import { sendEmail } from "../utils/sendEmail";
import "dotenv/config";

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

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new ErrorResponse("No user with this email", 404));
    }

    // console.log(req.protocol);  // http

    // get the reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Create reset url
    // info for the user what to do next
    const resetUrl = `${req.protocol}://${req.get(
      "host",
    )}user/me/resetpassword/${resetToken}`;

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
      await sendEmail({
        email: user.email,
        subject: "Password reset token",
        message,
      });
      jsonResponse<{}>(res, 200, true, "email sent", {});
    } catch (err) {
      console.error(err);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  },
);

/**
 * @method --- POST
 * @desc --- reset password
 * @access --- Public
 * @route --- user/me/resetpassword/:resetPasswordToken
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

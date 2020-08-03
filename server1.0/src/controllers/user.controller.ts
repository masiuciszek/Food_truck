import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import { User as UserType } from "../models/documents";
import { userModel as User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { jsonResponse } from "../utils/helpers";
import { sendEmail } from "../utils/sendEmail";
import sharp from "sharp";
import crypto from "crypto";
import "dotenv/config";
import { tokenResponse } from "../utils/tokenResponse";

/**
 * @method --- POST
 * @access --- Public
 * @route --- user/register
 * @desc --- register new user
 */

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create(req.body);

    tokenResponse(newUser, 201, res);

    // let token = await newUser.generateAuthToken();

    // res
    //   .status(201)
    //   .json({ success: true, msg: "User Registered!", data: newUser, token });
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

    tokenResponse(user, 200, res);

    // res.status(200).json({ success: true, message: "password updated" });

    // jsonResponse<UserType>(res, 200, true, "password updated", user);
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
 * @route --- user/me/resetpassword/:resettoken
 */

export const resetPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resettoken)
      .digest("hex");

    console.log(resetPasswordToken);

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return next(new ErrorResponse("Invalid token", 400));
    }

    user.password = req.body.password;
    // when user is done
    // then clear the resetPasswordToken property on the schema
    // and resetPasswordExpire
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    tokenResponse(user, 200, res);
    // jsonResponse<UserType>(res, 200, true, "new password", user);
  },
);

/**
 * @method --- POST
 * @desc --- Upload avatar
 * @access --- Private
 * @route --- user/me/avatar
 */

export const uploadAvatar = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const resizeBufferImage = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();

    req.user.avatar = resizeBufferImage;
    await req.user.save();

    jsonResponse(res, 201, true, "uploaded avatar", {});
  },
);

/**
 * @method --- GET
 * @desc --- Get avatar
 * @access --- Private
 * @route --- user/me/get_avatar
 */

export const getAvatar = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user._id);
    if (!user) {
      return next(new ErrorResponse(`no user founded`, 404));
    }

    // res.set("Content-Type", "image/png");
    res.set("Content-Type", "image/png");
    res.status(200).send(user.avatar);
    // jsonResponse(res, 201, true, "uploaded avatar", user.avatar);
  },
);

/**
 * @method --- DELETE
 * @desc --- Delete avatar
 * @access --- Private
 * @route --- user/me/remove_avatar
 */

export const deleteAvatar = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorResponse(`no user founded`, 404));
    }

    req.user.avatar = undefined;
    await req.user.save();

    jsonResponse(res, 200, true, "avatar deleted", {});
  },
);

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

    jsonResponse(res, 200, true, `${user.firstName} got removed`, {});
  },
);

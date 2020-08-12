import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { ErrorResponse } from "../utils/ErrorResponse";
import User from "../models/User";
import tokenResponse from "../utils/jsonTokenResponse";
import { AuthRequest } from "../middleware/authHandler";

/**
 * @method POST
 * @route /auth/login
 * @desc login
 * @status public
 */

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email && !password) {
      return next(new ErrorResponse(`Email and Password is required`, 401));
    }
    const user = await User.findOne({ email });

    if (!user) {
      return next(
        new ErrorResponse(`Email with ${email} is not registered!`, 401),
      );
    }

    const isMatched = await user.comparePasswords(password);

    if (!isMatched) {
      return next(new ErrorResponse(`Password or email does not match!`, 401));
    }

    tokenResponse(user, 200, res);
  },
);

/**
 * @method POST
 * @route /auth/logout
 * @desc logout
 * @status private
 */

export const logout = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: false, // TODO: CHANGE
    });

    res.status(200).json({
      success: true,
      data: {},
    });
    // res.send("logout");
  },
);

import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import { AuthRequest } from '../middleware/authHandler';
import { userModel as User } from '../models/User';
import { ErrorResponse } from '../utils/errorResponse';

/**
 * @method --- POST
 * @access --- Public
 * @route --- auth/login
 */
export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorResponse('Please enter email and password', 404));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse('Authentication error', 404));
    }

    const isMatchedPassword = await user.comparePassword(password);

    if (!isMatchedPassword) {
      return next(new ErrorResponse('Authentication error', 404));
    }

    let token = await user.generateAuthToken();

    res
      .status(200)
      .json({ success: true, msg: 'Logged in', data: user, token });
  },
);

/**
 * @method --- POST
 * @access --- Private
 * @route --- auth/logout
 * @desc --- logout single session
 */
export const logout = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token,
    );

    await req.user.save();

    res.status(200).json({ success: true, msg: 'Logged out', data: {} });
  },
);

/**
 * @method --- POST
 * @access --- Private
 * @route --- auth/logout_tokens
 * @desc --- clear tokens list
 */
export const logoutAllSessions = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    // req.user.tokens = [];
    req.user.tokens = req.user.tokens.splice(1);
    await req.user.save();

    res
      .status(200)
      .json({ success: true, msg: 'Logged out all token sessions!', data: {} });
  },
);

// export const test = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.baseUrl);
//     console.log(req.path);
//     res.send('test');
//   },
// );

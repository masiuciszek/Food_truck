import { NextFunction, Request, Response } from 'express';
/**
 * @method --- POST
 * @access --- Public
 * @route --- user/register
 */
export declare const registerUser: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>, next: NextFunction) => void;
/**
 * @method --- GET
 * @access --- Public
 * @route --- user/all_users
 */
export declare const getAllUsers: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>, next: NextFunction) => void;

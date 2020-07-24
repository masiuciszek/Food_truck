import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import { Store } from "../models/Store";
import { userModel as User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";

/**
 * @method --- POST
 * @access --- Private
 * @route --- store/create_new_store
 * @desc Must be a amin to create a store
 */
export const createStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    req.body.owner = req.user._id;

    const newStore = await Store.create(req.body);

    res
      .status(201)
      .json({ success: true, msg: "store created", data: newStore });
  },
);

/**
 * @method --- GET
 * @access --- Private
 * @route --- store/user/my_stores
 * @desc Get all of my stores
 */
export const myStores = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const stores = await Store.find({}).populate({
      path: "owner",
      select: "firstName lastName email",
    });

    res.status(201).json({ success: true, msg: "my stores", data: stores });
  },
);

/**
 * @method --- GET
 * @access --- Private
 * @route --- store/user/my_store/:id
 * @desc Get A Single Store
 */
export const mySingleStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {},
);

/**
 * @method --- PUT
 * @access --- Private
 * @route --- store/user/update/:id
 * @desc Update A Single Store
 */
export const updateMyStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {},
);

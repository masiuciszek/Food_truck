import { NextFunction, Request, response, Response } from "express";
import sharp from "sharp";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import { Store } from "../models/Store";
import { userModel as User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { jsonResponse } from "../utils/helpers";

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

    await newStore.save();

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
    const me = await User.findById(req.user._id);

    const stores = await Store.find({ owner: me }).populate({
      path: "owner",
      select: "firstName lastName email",
    });

    res.status(201).json({ success: true, msg: "my stores", data: stores });
  },
);

/**
 * @method --- GET
 * @access --- Public
 * @route --- store/stores
 * @desc Get All Stores
 */

export const getAllStores = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const stores = await Store.find({}).populate({
      path: "owner",
      select: "firstName email",
    });

    if (!stores) return new ErrorResponse(`No stores`, 400);

    jsonResponse(res, 200, true, "all stores", stores);
  },
);

/**
 * @method --- GET
 * @access --- Private
 * @route --- store/user/my_store/:id
 * @desc Get A Single Store
 */
export const mySingleStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const store = await Store.findById(req.params.id).populate({
      path: "owner",
      select: "_id firstName lastName",
    });

    if (!store) {
      return next(
        new ErrorResponse(`Store with id ${req.params.id} was not found`, 404),
      );
    }

    if (store?.owner._id.toString() !== req.user._id.toString()) {
      return next(new ErrorResponse(`User ${req.user.id} has no access`, 404));
    }

    jsonResponse(res, 200, true, `store ${req.params.id} `, store);
  },
);

/**
 * @method --- PUT
 * @access --- Private
 * @route --- store/user/update/:id
 * @desc Update My Single Store
 */
export const updateMyStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let store = await Store.findById(req.params.id);
    if (!store) {
      return next(
        new ErrorResponse(`Store with id ${req.params.id} was not found`, 404),
      );
    }
    if (store.owner.toString() !== req.user.id) {
      return next(new ErrorResponse(`User ${req.user.id} has no access`, 404));
    }

    store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    jsonResponse(res, 200, true, "updated store", store);
  },
);

/**
 * @method --- Delete
 * @access --- Private
 * @route --- store/user/delete/:id
 * @desc Delete selected Store
 */
export const deleteSelectedStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const store = await Store.findById(req.params.id);
    if (!store) {
      return next(
        new ErrorResponse(`Store with id ${req.params.id} was not found`, 404),
      );
    }

    if (store.owner.toString() !== req.user.id) {
      return next(new ErrorResponse(`User ${req.user.id} has no access`, 404));
    }

    await Store.findByIdAndDelete(req.params.id);

    jsonResponse(res, 200, true, `deleted store ${req.params.id}`, {});
  },
);

/**
 * @method --- Delete
 * @access --- Private
 * @route --- store/user/deleteall
 * @desc Delete all stores
 */

export const deleteAllMyStores = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const me = await User.findById(req.user._id);
    if (!me) {
      return next(new ErrorResponse(`User  has no access`, 404));
    }

    await Store.deleteMany({ owner: req.user.id });
    jsonResponse(res, 200, true, `stores got deleted`, {});
  },
);

/**
 * @method --- POST
 * @access --- Private
 * @route --- store/user/my_store/image/:id
 * @desc Upload Image
 */
export const uploadStoreImage = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const store = await Store.findById(req.params.id).populate({
      path: "owner",
      select: "firstName lastName",
    });

    if (!store) {
      return next(
        new ErrorResponse(`Store with id ${req.params.id} was not found`, 404),
      );
    }

    if (store.owner.id !== req.user.id) {
      return next(new ErrorResponse(`User ${req.user.id} has no access`, 404));
    }

    const resizeBufferImage = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();

    store.image = resizeBufferImage;
    await store.save();

    jsonResponse(res, 201, true, "uploaded image", {});
  },
);

/**
 * @method --- GET
 * @access --- Public
 * @route --- store/image/:id
 * @desc Get Store Image
 */
export const getStoreImage = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const store = await Store.findById(req.params.id);
    if (!store) {
      return next(new ErrorResponse(`no store with ID ${req.params.id}`, 404));
    }

    res.set("Content-Type", "image/png");
    res.status(200).send(store?.image);
  },
);

/**
 * @method --- POST
 * @access --- Private
 * @route --- store/uploadimage2/:id
 * @desc Get Store Image
 */
export const uploadImage2 = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const store = await Store.findById(req.params.id).populate({
      path: "owner",
      select: "firstName lastName",
    });

    if (!store) {
      return next(
        new ErrorResponse(`Store with id ${req.params.id} was not found`, 404),
      );
    }

    if (store.owner.id !== req.user.id) {
      return next(new ErrorResponse(`User ${req.user.id} has no access`, 404));
    }

    store.imageString = req.body.imageString;
    await store.save();
    jsonResponse(res, 201, true, "uploaded image", store);
  },
);

/**
 * @method --- Get
 * @access --- Public
 * @route --- store/:id
 * @desc Get store by slug
 */

export const getStoreById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const store = await Store.findById(req.params.id).populate({
      path: "owner",
      select: "firstName lastName email",
    });

    if (!store) {
      return next(
        new ErrorResponse(`Store not found with id of ${req.params.id}`, 404),
      );
    }

    jsonResponse(res, 200, true, "", store);
  },
);

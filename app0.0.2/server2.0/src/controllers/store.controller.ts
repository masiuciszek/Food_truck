import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { ErrorResponse } from "../utils/ErrorResponse";
import { AuthRequest } from "../middleware/authHandler";
import Store from "../models/Store";

/**
 * @method POST
 * @route /store
 * @desc create new store , only for registered users
 * @status Private
 */

export const createStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    req.body.author = req.user._id;

    const store = await Store.create(req.body);

    await store.save();

    res.status(201).json({ success: true, data: store });
  },
);

/**
 * @method GET
 * @route /store
 * @desc get all stores
 * @status Public
 */

export const getStores = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const stores = await Store.find({}).populate({
      path: "author",
      select: "firstName lastName email",
    });

    res.status(200).json({ success: true, data: stores });
  },
);

/**
 * @method GET
 * @route /store/my_stores
 * @desc get my stores
 * @status Private
 */

export const getMyStores = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const stores = await Store.find({ author: req.user.id }).populate({
      path: "author",
      select: "firstName lastName email",
    });

    res.status(200).json({ success: true, data: stores });
  },
);
/**
 * @method GET
 * @route /store/:slug
 * @desc get store by slug
 * @status public
 */

export const getStoreBySlug = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const store = await Store.find({ slug: req.params.slug }).populate({
      path: "author",
      select: "firstName lastName email",
    });

    res.status(200).json({ success: true, data: store });
  },
);

/**
 * @method PUT
 * @route /store/update_my_store/:slug
 * @desc update my store
 * @status Private
 */

export const updateMyStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const storeToUpdate = await Store.findOne({
      slug: req.params.slug,
      author: req.user.id,
    });

    const newUpdatedStore = await Store.findByIdAndUpdate(
      storeToUpdate?._id,
      req.body,
      { new: true, runValidators: true },
    );

    await newUpdatedStore?.save();

    res.status(200).json({ success: true, data: newUpdatedStore });
  },
);

/**
 * @method Delete
 * @route /store/delete/:id
 * @desc delete my store
 * @status Private
 */

export const deleteStore = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const storeToDelete = await Store.findById(req.params.id);

    if (!storeToDelete) {
      return next(
        new ErrorResponse(`store not found with id of ${req.params.id}`, 404),
      );
    }
    // make sure that store belongs to the user
    if (storeToDelete.author.toString() !== req.user.id) {
      return next(
        new ErrorResponse(
          `User  ${req.user.id} is not authorized to delete this store`,
          401,
        ),
      );
    }

    await storeToDelete.remove();

    res.status(200).json({ success: true, data: {} });
  },
);

/**
 * @method GET
 * @route /store/filterstore
 * @desc filter stores
 * @status Public
 */

export const filterStore = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // const stores = await Store.find({ name: { $match: "t" } });
    const { name } = req.query;
    let reg = new RegExp(`${name}`, "gi");
    const stores = await Store.find({ name: reg });

    res.status(200).json({ success: true, data: stores });
  },
);

import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import { Review } from "../models/Review";
import { Store } from "../models/Store";
import { userModel as User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { jsonResponse } from "../utils/helpers";

/**
 * @method --- POST
 * @access --- Private
 * @route --- /review/add_review/:storeId
 * @desc --- Add a review
 */

export const addReview = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const store = await Store.findById(req.params.storeId);

    // You should not be able to leave a review for your own store
    if (store?.owner.toString() === req.user.id) {
      return next(
        new ErrorResponse("you can not leave a review for your own Store", 401),
      );
    }

    req.body.author = req.user.id;
    req.body.store = req.params.storeId;
    const newReview = await Review.create(req.body);
    await newReview.save();
    jsonResponse(res, 201, true, "review added", newReview);
  },
);

/**
 * @method --- GET
 * @access --- Private
 * @route --- /user/reviews/all
 * @desc --- get all my reviews
 */

export const getMyReviews = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const reviews = await Review.find({ author: req.user.id });

    if (!reviews) {
      return next(
        new ErrorResponse(
          "You have not left any review for a given store",
          404,
        ),
      );
    }

    jsonResponse(res, 200, true, "", reviews);
  },
);

/**
 * @method --- GET
 * @access --- Private
 * @route --- /user/reviews/:reviewId
 * @desc --- get single review
 */

/**
 * @method --- GET
 * @access --- Public
 * @route --- /reviews/
 * @desc --- get all review
 */

export const getAllReviews = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const reviews = await Review.find({});

    jsonResponse(res, 200, true, "all reviews", reviews);
  },
);

/**
 * @method --- DELETE
 * @access --- Private
 * @route --- /user/reviews/delete/:reviewId
 * @desc --- remove my review
 */

export const removeMyReview = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const review = await Review.findById(req.params.reviewId);
    // check if the review belong to the user that want to delete the review
    if (req.user.id !== review?.author) {
      return next(
        new ErrorResponse("you are not allowed to access this route", 404),
      );
    }

    await Review.findByIdAndDelete(req.params.reviewId);
    jsonResponse(res, 200, true, "Review Removed", {});
  },
);

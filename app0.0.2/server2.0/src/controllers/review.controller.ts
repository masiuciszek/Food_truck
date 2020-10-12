import { Response, NextFunction } from "express";
import Store from "../models/Store";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import Review from "../models/Review";
import { ErrorResponse } from "../utils/ErrorResponse";

/**
 * @desc leave a review
 * @method POST
 * @access Private
 * @path /review/:storeId
 */

export const leaveReview = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const author = req.user._id;
    const store = req.params.storeId;
    const review = await Review.create({
      ...req.body,
      author,
      store,
    });
    await review.save();
    res.status(201).json({ success: true, data: review });
  },
);

/**
 * @desc delete review
 * @method DELETE
 * @access Private
 * @path /review/:reviewId
 */

export const deleteReview = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const review = await Review.findById(req.params.reviewId);

    if (!review) {
      return next(new ErrorResponse(`review not found`, 404));
    }

    // Make sure user posted the comment
    if (!review.author._id.equals(req.user.id)) {
      return new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this bootcamp`,
        401,
      );
    }

    await review.remove();

    res
      .status(200)
      .json({ success: true, msg: `Review just got removed`, data: {} });
  },
);

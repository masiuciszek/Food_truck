import { Response, NextFunction } from "express";
import asyncHandler from "../middleware/asyncHandler";
import { AuthRequest } from "../middleware/authHandler";
import Review from "../models/Review";

/**
 * @desc leave a review
 * @method POST
 * @access Private
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

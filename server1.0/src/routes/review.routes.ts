import { Router } from "express";
import * as reviewController from "../controllers/review.controller";
import authHandler from "../middleware/authHandler";

const router = Router();

router
  .route("/add_review/:storeId")
  .post(authHandler, reviewController.addReview);

router
  .route("/user/reviews/all")
  .get(authHandler, reviewController.getMyReviews);

export { router };

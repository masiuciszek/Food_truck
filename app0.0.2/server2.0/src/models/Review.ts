import mongoose, { Model, Document, model, HookNextFunction } from "mongoose";
import slugify from "slugify";
import "dotenv/config";
import { User } from "./User";
import { Store } from "./Store";

export interface Review extends Document {
  createdAt: Date;
  author: User["_id"];
  store: Store["_id"];
  text: string;
  rating: number;
}

const reviewSchema = new mongoose.Schema<Review>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: ["author must be supplied", true],
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    required: ["You must supply a store!", true],
  },
  text: {
    type: String,
    required: "Your review must have text!",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
});

reviewSchema.pre<Review>("find", function (next: HookNextFunction) {
  this.populate("author");
  next();
});
reviewSchema.pre<Review>("findOne", function (next: HookNextFunction) {
  this.populate("author");
  next();
});

const ReviewModel = mongoose.model<Review>("Review", reviewSchema);

export default ReviewModel;

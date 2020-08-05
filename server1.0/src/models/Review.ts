import mongoose, { HookNextFunction, Schema } from "mongoose";
import { Review } from "./documents";

const ReviewSchema = new Schema<Review>({
  text: {
    type: String,
    required: ["please enter a review ", true],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: ["please leave a rating", true],
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    required: ["store must be valid", true],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: ["owner must be valid", true],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Populate by default when quiring from the Review schema
ReviewSchema.pre<Review>("find", function (next: HookNextFunction): void {
  this.populate("author");
  next();
});

ReviewSchema.pre<Review>("find", function (next: HookNextFunction): void {
  this.populate("store");
  next();
});

ReviewSchema.pre<Review>("findOne", function (next: HookNextFunction): void {
  this.populate("author");
  next();
});

const Review = mongoose.model<Review>("Review", ReviewSchema);

export { Review };

import mongoose, { Schema, Document, HookNextFunction } from "mongoose";
import { User, Store } from "./documents";
import slugify from "slugify";

const StoreSchema = new Schema<Store>({
  name: {
    type: String,
    required: ["please enter a store name ", true],
  },
  slug: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: ["owner must be valid", true],
  },
  type: {
    type: String,
    enum: ["FRIENDLY", "LOVELY", "FAMILY", "SPORTS_FAN"],
    default: "FRIENDLY",
  },
  imageString: String,
  image: {
    type: Buffer,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Store = mongoose.model<Store>("Store", StoreSchema);

// for creating slug when created
StoreSchema.pre<Store>("save", function (next: HookNextFunction): void {
  // this.slug = slugify(this.name, { lower: true });
  this.slug = this.name.split("").join("-").toLowerCase();
  next();
});

// find reviews where the stores _id property === reviews store property
StoreSchema.virtual("reviews", {
  ref: "Review", // what model to link ?
  localField: "_id", // which field on the store?
  foreignField: "store", // which field on the review?
});

StoreSchema.pre<Store>("find", function (next: HookNextFunction) {
  this.populate("reviews");
  next();
});

StoreSchema.pre("findOne", function (next: HookNextFunction) {
  this.populate("reviews");

  next();
});

export { Store };

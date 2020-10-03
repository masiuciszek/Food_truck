import mongoose, { Model, Document, model, HookNextFunction } from "mongoose";
import slugify from "slugify";
import "dotenv/config";
import { User } from "./User";

export interface Store extends Document {
  name: string;
  slug: string;
  desc: string;
  tags: string[];
  rating: string;
  address: string;
  photo: string;
  author: User["_id"];
  createdAt: Date;
}

interface IStore extends Model<Store> {
  bar: () => string;
}

const storeSchema = new mongoose.Schema<Store>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: String,
    rating: {
      type: String,
      enum: ["one", "two", "three", "four", "five"],
      default: "one",
    },
    desc: {
      type: String,
      required: [true, "please leave a description"],
    },
    tags: [String],
    address: {
      type: String,
      required: [true, "You must supply an address!"],
    },
    photo: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "You must supply an author"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

storeSchema.pre<Store>("save", async function (next: HookNextFunction) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name, { replacement: "-", lower: true });

  next();
});

storeSchema.statics.bar = function () {
  return "apa";
};
// find reviews where the stores _id property === reviews store property
storeSchema.virtual("reviews", {
  ref: "Review", // what model do we link to
  localField: "_id", // which field on the store
  foreignField: "store", // which field on the review?
});

storeSchema.pre("find", function (next: HookNextFunction) {
  this.populate("reviews");
  next();
});

storeSchema.pre("findOne", function (next: HookNextFunction) {
  this.populate("reviews");
  next();
});

const storeModel = model<Store, IStore>("Store", storeSchema);
export default storeModel;

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
  const store = this;
  store.slug = slugify(store.name, { lower: true });
  next();
});

export { Store };

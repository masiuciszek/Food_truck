"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var ReviewSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: ["please enter a review ", true],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    store: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Store",
        required: ["store must be valid", true],
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: ["owner must be valid", true],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
ReviewSchema.pre("find", function (next) {
    this.populate("author");
    next();
});
var Review = mongoose_1.default.model("Review", ReviewSchema);
exports.Review = Review;
//# sourceMappingURL=Review.js.map
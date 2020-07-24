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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var slugify_1 = __importDefault(require("slugify"));
var StoreSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: ["please enter a store name ", true],
    },
    slug: String,
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: ["owner must be valid", true],
    },
    type: {
        type: String,
        required: ["please enter a store name ", true],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
var store = mongoose_1.default.model("Store", StoreSchema);
exports.store = store;
// for creating slug when created
StoreSchema.pre("save", function (next) {
    var store = this;
    store.slug = slugify_1.default(store.name, { lower: true, replacement: "-" });
    next();
});
//# sourceMappingURL=Store.js.map
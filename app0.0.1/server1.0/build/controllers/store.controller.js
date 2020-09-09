"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreImage = exports.uploadStoreImage = exports.deleteAllMyStores = exports.deleteSelectedStore = exports.updateMyStore = exports.mySingleStore = exports.getAllStores = exports.myStores = exports.createStore = void 0;
var sharp_1 = __importDefault(require("sharp"));
var asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
var Store_1 = require("../models/Store");
var User_1 = require("../models/User");
var errorResponse_1 = require("../utils/errorResponse");
var helpers_1 = require("../utils/helpers");
/**
 * @method --- POST
 * @access --- Private
 * @route --- store/create_new_store
 * @desc Must be a amin to create a store
 */
exports.createStore = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newStore;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.body.owner = req.user._id;
                return [4 /*yield*/, Store_1.Store.create(req.body)];
            case 1:
                newStore = _a.sent();
                res
                    .status(201)
                    .json({ success: true, msg: "store created", data: newStore });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- GET
 * @access --- Private
 * @route --- store/user/my_stores
 * @desc Get all of my stores
 */
exports.myStores = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var me, stores;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.findById(req.user._id)];
            case 1:
                me = _a.sent();
                return [4 /*yield*/, Store_1.Store.find({ owner: me }).populate({
                        path: "owner",
                        select: "firstName lastName email",
                    })];
            case 2:
                stores = _a.sent();
                res.status(201).json({ success: true, msg: "my stores", data: stores });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- GET
 * @access --- Public
 * @route --- store/stores
 * @desc Get All Stores
 */
exports.getAllStores = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var stores;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Store_1.Store.find({}).populate({
                    path: "owner",
                    select: "firstName email",
                })];
            case 1:
                stores = _a.sent();
                if (!stores)
                    return [2 /*return*/, new errorResponse_1.ErrorResponse("No stores", 400)];
                helpers_1.jsonResponse(res, 200, true, "all stores", stores);
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- GET
 * @access --- Private
 * @route --- store/user/my_store/:id
 * @desc Get A Single Store
 */
exports.mySingleStore = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Store_1.Store.findById(req.params.id).populate({
                    path: "owner",
                    select: "_id firstName lastName",
                })];
            case 1:
                store = _a.sent();
                if (!store) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("Store with id " + req.params.id + " was not found", 404))];
                }
                if ((store === null || store === void 0 ? void 0 : store.owner._id.toString()) !== req.user._id.toString()) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("User " + req.user.id + " has no access", 404))];
                }
                helpers_1.jsonResponse(res, 200, true, "store " + req.params.id + " ", store);
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- PUT
 * @access --- Private
 * @route --- store/user/update/:id
 * @desc Update My Single Store
 */
exports.updateMyStore = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Store_1.Store.findById(req.params.id)];
            case 1:
                store = _a.sent();
                if (!store) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("Store with id " + req.params.id + " was not found", 404))];
                }
                if (store.owner.toString() !== req.user.id) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("User " + req.user.id + " has no access", 404))];
                }
                return [4 /*yield*/, Store_1.Store.findByIdAndUpdate(req.params.id, req.body, {
                        new: true,
                        runValidators: true,
                    })];
            case 2:
                store = _a.sent();
                helpers_1.jsonResponse(res, 200, true, "updated store", store);
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- Delete
 * @access --- Private
 * @route --- store/user/delete/:id
 * @desc Delete selected Store
 */
exports.deleteSelectedStore = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Store_1.Store.findById(req.params.id)];
            case 1:
                store = _a.sent();
                if (!store) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("Store with id " + req.params.id + " was not found", 404))];
                }
                if (store.owner.toString() !== req.user.id) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("User " + req.user.id + " has no access", 404))];
                }
                return [4 /*yield*/, Store_1.Store.findByIdAndDelete(req.params.id)];
            case 2:
                _a.sent();
                helpers_1.jsonResponse(res, 200, true, "deleted store " + req.params.id, {});
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- Delete
 * @access --- Private
 * @route --- store/user/deleteall
 * @desc Delete all stores
 */
exports.deleteAllMyStores = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var me;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.findById(req.user._id)];
            case 1:
                me = _a.sent();
                if (!me) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("User  has no access", 404))];
                }
                return [4 /*yield*/, Store_1.Store.deleteMany({ owner: req.user.id })];
            case 2:
                _a.sent();
                helpers_1.jsonResponse(res, 200, true, "stores got deleted", {});
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- POST
 * @access --- Private
 * @route --- store/user/my_store/image/:id
 * @desc Upload Image
 */
exports.uploadStoreImage = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var store, resizeBufferImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Store_1.Store.findById(req.params.id).populate({
                    path: "owner",
                    select: "firstName lastName",
                })];
            case 1:
                store = _a.sent();
                if (!store) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("Store with id " + req.params.id + " was not found", 404))];
                }
                if (store.owner.id !== req.user.id) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("User " + req.user.id + " has no access", 404))];
                }
                return [4 /*yield*/, sharp_1.default(req.file.buffer)
                        .resize({ width: 250, height: 250 })
                        .png()
                        .toBuffer()];
            case 2:
                resizeBufferImage = _a.sent();
                store.image = resizeBufferImage;
                return [4 /*yield*/, store.save()];
            case 3:
                _a.sent();
                helpers_1.jsonResponse(res, 201, true, "uploaded image", {});
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- GET
 * @access --- Public
 * @route --- store/image/:id
 * @desc Get Store Image
 */
exports.getStoreImage = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Store_1.Store.findById(req.params.id)];
            case 1:
                store = _a.sent();
                if (!store) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("no store with ID " + req.params.id, 404))];
                }
                res.set("Content-Type", "image/png");
                res.status(200).send(store === null || store === void 0 ? void 0 : store.image);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=store.controller.js.map
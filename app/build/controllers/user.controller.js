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
exports.removeMe = exports.uploadAvatar = exports.resetPassword = exports.forgotPassword = exports.updatePassword = exports.updateMe = exports.getMe = exports.registerUser = void 0;
var asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
var User_1 = require("../models/User");
var errorResponse_1 = require("../utils/errorResponse");
var helpers_1 = require("../utils/helpers");
var sendEmail_1 = require("../utils/sendEmail");
var sharp_1 = __importDefault(require("sharp"));
var crypto_1 = __importDefault(require("crypto"));
require("dotenv/config");
/**
 * @method --- POST
 * @access --- Public
 * @route --- user/register
 * @desc --- register new user
 */
exports.registerUser = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.create(req.body)];
            case 1:
                newUser = _a.sent();
                return [4 /*yield*/, newUser.generateAuthToken()];
            case 2:
                token = _a.sent();
                res
                    .status(201)
                    .json({ success: true, msg: "User Registered!", data: newUser, token: token });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- GET
 * @desc --- get user profile
 * @access --- Private
 * @route --- user/me
 */
exports.getMe = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.findById(req.user._id).select("-password -tokens")];
            case 1:
                user = _a.sent();
                res.status(200).json({ success: true, msg: "Get me", data: user });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- PUT
 * @desc --- update user profile
 * @access --- Private
 * @route --- user/me/update
 */
exports.updateMe = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.findById(req.user._id)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("User not found", 404))];
                }
                return [4 /*yield*/, User_1.userModel.findByIdAndUpdate(req.user._id, req.body, {
                        new: true,
                        runValidators: true,
                    })];
            case 2:
                user = _a.sent();
                res.status(201).json({
                    success: true,
                    msg: (user === null || user === void 0 ? void 0 : user.firstName) + " got updated!",
                    data: user,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- POST
 * @desc --- update password
 * @access --- Private
 * @route --- user/me/update_password
 */
exports.updatePassword = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.findById(req.user._id)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("password incorrect", 404))];
                }
                user.password = req.body.password;
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                res.status(200).json({ success: true, message: "password updated" });
                helpers_1.jsonResponse(res, 200, true, "password updated", user);
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- POST
 * @desc --- forgot password
 * @access --- Public
 * @route --- user/me/forgot_password
 */
exports.forgotPassword = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, resetToken, resetUrl, message, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.findOne({ email: req.body.email })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("No user with this email", 404))];
                }
                resetToken = user.getResetPasswordToken();
                return [4 /*yield*/, user.save({ validateBeforeSave: false })];
            case 2:
                _a.sent();
                resetUrl = req.protocol + "://" + req.get("host") + "user/me/resetpassword/" + resetToken;
                message = "You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n " + resetUrl;
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 7]);
                return [4 /*yield*/, sendEmail_1.sendEmail({
                        email: user.email,
                        subject: "Password reset token",
                        message: message,
                    })];
            case 4:
                _a.sent();
                helpers_1.jsonResponse(res, 200, true, "email sent", {});
                return [3 /*break*/, 7];
            case 5:
                err_1 = _a.sent();
                console.error(err_1);
                user.resetPasswordToken = undefined;
                user.resetPasswordExpire = undefined;
                return [4 /*yield*/, user.save({ validateBeforeSave: false })];
            case 6:
                _a.sent();
                return [2 /*return*/, next(new errorResponse_1.ErrorResponse("Email could not be sent", 500))];
            case 7: return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- POST
 * @desc --- reset password
 * @access --- Public
 * @route --- user/me/resetpassword/:resettoken
 */
exports.resetPassword = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var resetPasswordToken, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resetPasswordToken = crypto_1.default
                    .createHash("sha256")
                    .update(req.params.resettoken)
                    .digest("hex");
                console.log(resetPasswordToken);
                return [4 /*yield*/, User_1.userModel.findOne({
                        resetPasswordToken: resetPasswordToken,
                        resetPasswordExpire: { $gt: Date.now() },
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("Invalid token", 400))];
                }
                user.password = req.body.password;
                // when user is done
                // then clear the resetPasswordToken property on the schema
                // and resetPasswordExpire
                user.resetPasswordToken = undefined;
                user.resetPasswordExpire = undefined;
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                helpers_1.jsonResponse(res, 200, true, "new password", user);
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- POST
 * @desc --- Upload avatar
 * @access --- Private
 * @route --- user/me/avatar
 */
exports.uploadAvatar = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var resizeBufferImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sharp_1.default(req.file.buffer)
                    .resize({ width: 250, height: 250 })
                    .png()
                    .toBuffer()];
            case 1:
                resizeBufferImage = _a.sent();
                req.user.avatar = resizeBufferImage;
                return [4 /*yield*/, req.user.save()];
            case 2:
                _a.sent();
                helpers_1.jsonResponse(res, 201, true, "uploaded avatar", {});
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- Delete
 * @desc --- remove user profile
 * @access --- Private
 * @route --- user/me/remove
 */
exports.removeMe = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.userModel.findById(req.user._id)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse("User not found", 404))];
                }
                return [4 /*yield*/, User_1.userModel.findByIdAndRemove(req.user._id)];
            case 2:
                _a.sent();
                helpers_1.jsonResponse(res, 200, true, user.firstName + " got removed", {});
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=user.controller.js.map
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
exports.logoutAllSessions = exports.logout = exports.login = void 0;
var asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
var User_1 = require("../models/User");
var errorResponse_1 = require("../utils/errorResponse");
/**
 * @method --- POST
 * @access --- Public
 * @route --- auth/login
 */
exports.login = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, isMatchedPassword, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse('Please enter email and password', 404))];
                }
                return [4 /*yield*/, User_1.userModel.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse('Authentication error', 404))];
                }
                return [4 /*yield*/, user.comparePassword(password)];
            case 2:
                isMatchedPassword = _b.sent();
                if (!isMatchedPassword) {
                    return [2 /*return*/, next(new errorResponse_1.ErrorResponse('Authentication error', 404))];
                }
                return [4 /*yield*/, user.generateAuthToken()];
            case 3:
                token = _b.sent();
                res
                    .status(200)
                    .json({ success: true, msg: 'Logged in', data: user, token: token });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- POST
 * @access --- Private
 * @route --- auth/logout
 * @desc --- logout single session
 */
exports.logout = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.user.tokens = req.user.tokens.filter(function (token) { return token.token !== req.token; });
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).json({ success: true, msg: 'Logged out', data: {} });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @method --- POST
 * @access --- Private
 * @route --- auth/logout_tokens
 * @desc --- clear tokens list
 */
exports.logoutAllSessions = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // req.user.tokens = [];
                req.user.tokens = req.user.tokens.splice(1);
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res
                    .status(200)
                    .json({ success: true, msg: 'Logged out all token sessions!', data: {} });
                return [2 /*return*/];
        }
    });
}); });
// export const test = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.baseUrl);
//     console.log(req.path);
//     res.send('test');
//   },
// );

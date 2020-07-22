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
exports.router = void 0;
var masterController = __importStar(require("../controllers/master.controller"));
var express_1 = require("express");
var authHandler_1 = __importDefault(require("../middleware/authHandler"));
var handleMaster_1 = require("../middleware/handleMaster");
var router = express_1.Router();
exports.router = router;
router
    .route('/all_users')
    .get(authHandler_1.default, handleMaster_1.handleMaster, masterController.getAllUsers);
router
    .route('/delete_all_users')
    .delete(authHandler_1.default, handleMaster_1.handleMaster, masterController.deleteAllUsers);

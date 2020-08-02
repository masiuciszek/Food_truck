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
var storeController = __importStar(require("../controllers/store.controller"));
var express_1 = require("express");
var authHandler_1 = __importDefault(require("../middleware/authHandler"));
var adminHandler_1 = require("../middleware/adminHandler");
var imgUpload_1 = require("../utils/imgUpload");
var router = express_1.Router();
exports.router = router;
router.route("/stores").get(storeController.getAllStores);
router
    .route("/create_new_store")
    .post(authHandler_1.default, adminHandler_1.handleAdmin, storeController.createStore);
router
    .route("/user/my_stores")
    .get(authHandler_1.default, adminHandler_1.handleAdmin, storeController.myStores);
router
    .route("/user/my_store/:id")
    .get(authHandler_1.default, storeController.mySingleStore);
router
    .route("/user/update/:id")
    .put(authHandler_1.default, storeController.updateMyStore);
router
    .route("/user/my_store/image/:id")
    .post(imgUpload_1.upload.single("image"), authHandler_1.default, storeController.uploadStoreImage);
router
    .route("/user/delete/:id")
    .delete(authHandler_1.default, storeController.deleteSelectedStore);
router
    .route("/user/deleteall")
    .delete(authHandler_1.default, storeController.deleteAllMyStores);
router.route("/image/:id").get(storeController.getStoreImage);
//# sourceMappingURL=store.routes.js.map
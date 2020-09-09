"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var imageFilter = function (req, file, cb) {
    var regex = /\.(jpg|jpeg|png)$/;
    if (!file.originalname.match(regex)) {
        return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
};
var upload = multer_1.default({
    limits: {
        fileSize: 1000000,
    },
    fileFilter: imageFilter,
});
exports.upload = upload;
//# sourceMappingURL=imgUpload.js.map
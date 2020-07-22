"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorResponse_1 = require("../utils/errorResponse");
exports.errorHandler = function (err, req, res, next) {
    var error = __assign({}, err);
    error.message = err.message;
    // TODO: DELETE!
    console.log('ERROR ', error);
    if (error.code === 11000) {
        var message = 'You are already registered!';
        error = new errorResponse_1.ErrorResponse(message, 404);
    }
    if (error.name === 'JsonWebTokenError') {
        var message = 'Authentication denied';
        error = new errorResponse_1.ErrorResponse(message, 401);
    }
    res
        .status(error.statusCode || 500)
        .json({ success: false, error: error.message || 'SERVER_ERROR!!!' });
    next();
};

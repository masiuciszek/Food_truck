"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonResponse = void 0;
var handleResponse = function (res, responseData) {
    res.status(200).json(responseData);
};
function jsonResponse(res, statusCode, isSuccess, msg, data) {
    res.status(statusCode).json({ success: isSuccess, msg: msg, data: data });
}
exports.jsonResponse = jsonResponse;
//# sourceMappingURL=helpers.js.map
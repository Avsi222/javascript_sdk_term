"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBody = exports.HTTPMethod = void 0;
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["get"] = "GET";
    HTTPMethod["post"] = "POST";
})(HTTPMethod = exports.HTTPMethod || (exports.HTTPMethod = {}));
var ResponseBody = /** @class */ (function () {
    function ResponseBody(data, deviceId) {
        this.data = data;
        this.deviceId = deviceId;
    }
    ResponseBody.prototype.getBody = function () {
        return {
            header: {
                timestampMs: Date.now(),
                deviceId: this.deviceId,
            },
            data: this.data,
        };
    };
    return ResponseBody;
}());
exports.ResponseBody = ResponseBody;

"use strict";
// import { AsyncStorage } from 'react-native';
Object.defineProperty(exports, "__esModule", { value: true });
var AuthStorageType;
(function (AuthStorageType) {
    AuthStorageType[AuthStorageType["localStorage"] = 0] = "localStorage";
    AuthStorageType[AuthStorageType["asyncStorage"] = 1] = "asyncStorage";
})(AuthStorageType || (AuthStorageType = {}));
var AuthStorage = /** @class */ (function () {
    function AuthStorage() {
    }
    return AuthStorage;
}());
exports.default = AuthStorage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequest = void 0;
var AuthRequest = /** @class */ (function () {
    function AuthRequest(clientId, clientSecret) {
        this.client_id = clientId;
        this.client_secret = clientSecret;
        this.audience = 'https://api.sandbox.zeero.network';
        this.grant_type = 'client_credentials';
    }
    return AuthRequest;
}());
exports.AuthRequest = AuthRequest;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = void 0;
var ConversationService_1 = require("./Services/ConversationService");
var AdminPosService_1 = require("./Services/AdminPosService");
var AdminTerminalService_1 = require("./Services/AdminTerminalService");
var AdditionalService_1 = require("./Services/AdditionalService");
var SDK = /** @class */ (function () {
    function SDK(deviceId, accessToken) {
        // const authService = new AuthService();
        // authService.setAccessToken(accessToken);
        this.adminPosService = new AdminPosService_1.AdminPosService(deviceId, accessToken);
        this.adminTerminalService = new AdminTerminalService_1.AdminTerminalService(deviceId, accessToken);
        this.additionalService = new AdditionalService_1.AdditionalService(deviceId, accessToken);
        this.conversationService = new ConversationService_1.ConversationService(deviceId, accessToken);
    }
    return SDK;
}());
exports.SDK = SDK;

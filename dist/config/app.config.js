"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const config_1 = require("@nestjs/config");
exports.AppConfig = (0, config_1.registerAs)('app', () => ({
    port: process.env.PORT || 3000,
}));
//# sourceMappingURL=app.config.js.map
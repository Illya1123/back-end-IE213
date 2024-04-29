"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfig = void 0;
const config_1 = require("@nestjs/config");
exports.JwtConfig = (0, config_1.registerAs)('jwt', () => ({
    secretKey: process.env.JWT_SECRET_KEY || 'secret',
    accessTokenLifeTime: process.env.JWT_ACCESS_TOKEN_LIFE_TIME || '1h',
    refreshTokenLifeTime: process.env.JWT_REFRESH_TOKEN_LIFE_TIME || '1d',
}));
//# sourceMappingURL=jwt.config.js.map
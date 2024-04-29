"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptConfig = void 0;
const config_1 = require("@nestjs/config");
exports.BcryptConfig = (0, config_1.registerAs)('bcrypt', () => ({
    salt: process.env.BCRYPT_SALT || 10,
}));
//# sourceMappingURL=bcrypt.config.js.map
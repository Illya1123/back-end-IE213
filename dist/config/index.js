"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_config_1 = require("./mongo.config");
const jwt_config_1 = require("./jwt.config");
const app_config_1 = require("./app.config");
const bcrypt_config_1 = require("./bcrypt.config");
const cloudinary_config_1 = require("./cloudinary.config");
exports.default = [mongo_config_1.MongoConfig, jwt_config_1.JwtConfig, app_config_1.AppConfig, bcrypt_config_1.BcryptConfig, cloudinary_config_1.CloudinaryConfig];
//# sourceMappingURL=index.js.map
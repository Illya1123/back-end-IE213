"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const constants_1 = require("../../common/constants");
const user_service_1 = require("../user/user.service");
const jwt_config_1 = require("../../config/jwt.config");
let AuthService = class AuthService {
    constructor(jwtConfig, userService, jwtService) {
        this.jwtConfig = jwtConfig;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateByUsernameAndPassword(username, pass) {
        const user = await this.userService.findOneByUsername(username);
        if (!user)
            return null;
        const isPasswordMatches = await bcrypt.compare(pass, user.password);
        if (isPasswordMatches) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(request) {
        const { username, password } = request;
        const user = await this.validateByUsernameAndPassword(username, password);
        if (!user)
            throw new common_1.ForbiddenException('Credentials incorrect');
        const accessToken = await this.signAccessToken(username, user.email);
        return {
            accessToken,
            username,
            email: user.email,
        };
    }
    async getCookieRefreshToken(username) {
        const token = await this.signRefreshToken(username);
        const expiredIn = this.jwtConfig.refreshTokenLifeTime;
        return `${constants_1.JWT_REFRESH_TOKEN_COOKIE_KEY}=${token}; HttpOnly; Path=/; Max-Age=${expiredIn}`;
    }
    async signAccessToken(username, email) {
        const payload = {
            sub: username,
            email,
        };
        return await this.jwtService.signAsync(payload);
    }
    async signRefreshToken(username, email) {
        const payload = {
            sub: username,
            email,
        };
        const expiredIn = this.jwtConfig.accessTokenLifeTime;
        return await this.jwtService.signAsync(payload, { expiresIn: expiredIn });
    }
    async register(registerRequest) {
        const { username, password } = registerRequest;
        const exist = await this.userService.existByUsername(username);
        if (exist)
            throw new common_1.BadRequestException(`${username} is registered`);
        await this.userService.create({ username, password });
        const accessToken = await this.signAccessToken(username);
        return {
            accessToken,
            username,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(jwt_config_1.JwtConfig.KEY)),
    __metadata("design:paramtypes", [void 0, user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { UserService } from '../user/user.service';
import { LoginDto, LoginResponse, RegisterDto } from './dto';
import { JwtConfig } from '../../config/jwt.config';
export declare class AuthService {
    private readonly jwtConfig;
    private userService;
    private jwtService;
    constructor(jwtConfig: ConfigType<typeof JwtConfig>, userService: UserService, jwtService: JwtService);
    validateByUsernameAndPassword(username: string, pass: string): Promise<any>;
    login(request: LoginDto): Promise<LoginResponse>;
    getCookieRefreshToken(username: string): Promise<string>;
    signAccessToken(username: string, email?: string): Promise<string>;
    signRefreshToken(username: string, email?: string): Promise<string>;
    register(registerRequest: RegisterDto): Promise<LoginResponse>;
}

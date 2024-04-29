import { Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto, LoginResponse, LoginDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginRequest: LoginDto, response: Response): Promise<LoginResponse>;
    register(registerRequest: RegisterDto): Promise<LoginResponse>;
    getAccessToken(username: string): Promise<LoginResponse>;
}

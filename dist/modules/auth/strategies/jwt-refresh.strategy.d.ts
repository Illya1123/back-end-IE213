import { Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { JwtConfig } from '../../../config/jwt.config';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private jwtConfig;
    constructor(jwtConfig: ConfigType<typeof JwtConfig>);
    validate(payload: JwtPayload): any;
}
export {};

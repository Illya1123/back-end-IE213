import { Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { JwtConfig } from '../../../config/jwt.config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private jwtConfig;
    constructor(jwtConfig: ConfigType<typeof JwtConfig>);
    validate(payload: JwtPayload): any;
}
export {};

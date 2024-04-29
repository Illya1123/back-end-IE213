export declare const JwtConfig: (() => {
    secretKey: string;
    accessTokenLifeTime: string;
    refreshTokenLifeTime: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    secretKey: string;
    accessTokenLifeTime: string;
    refreshTokenLifeTime: string;
}>;

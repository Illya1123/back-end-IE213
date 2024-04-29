declare const _default: (((() => {
    salt: string | number;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    salt: string | number;
}>) | ((() => {
    secretKey: string;
    accessTokenLifeTime: string;
    refreshTokenLifeTime: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    secretKey: string;
    accessTokenLifeTime: string;
    refreshTokenLifeTime: string;
}>) | ((() => {
    uri: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    uri: string;
}>) | ((() => {
    port: string | number;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: string | number;
}>) | ((() => {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    cloudName: string;
    apiKey: string;
    apiSecret: string;
}>))[];
export default _default;

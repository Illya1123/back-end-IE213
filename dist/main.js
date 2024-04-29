"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app_module_1 = require("./app.module");
const swagger_config_1 = require("./config/swagger.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const reflector = app.get(core_1.Reflector);
    (0, swagger_config_1.configSwagger)(app);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.enableCors();
    const port = configService.get('app.port');
    await app.listen(port);
}
bootstrap()
    .then(() => {
    console.log(`Application is running on port ${process.env.PORT}`);
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=main.js.map
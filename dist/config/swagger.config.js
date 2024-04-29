"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const configSwagger = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('NestJS Practice')
        .setDescription('NestJS Practice')
        .setVersion('0.0.1')
        .addBearerAuth({
        description: '[just text field] Please enter token in following format: Bearer <JWT>',
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
};
exports.configSwagger = configSwagger;
//# sourceMappingURL=swagger.config.js.map
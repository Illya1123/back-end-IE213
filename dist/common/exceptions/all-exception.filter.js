"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const dto_1 = require("../dto");
let AllExceptionFilter = class AllExceptionFilter {
    catch(exception, host) {
        console.log(exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        this.handleResponse(response, exception);
    }
    handleResponse(response, exception) {
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionMessage = exception instanceof common_1.HttpException ? exception.getResponse() : constants_1.SERVER_ERROR_MESSAGE;
        const responseObject = exceptionMessage instanceof Object
            ? dto_1.ResponseObject.fail(undefined, exceptionMessage.message || null)
            : dto_1.ResponseObject.fail(undefined, exceptionMessage);
        responseObject.statusCode = status;
        response.status(status).json(responseObject);
    }
};
AllExceptionFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilter);
exports.AllExceptionFilter = AllExceptionFilter;
//# sourceMappingURL=all-exception.filter.js.map
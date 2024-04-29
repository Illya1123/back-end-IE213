"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseObject = void 0;
const common_1 = require("@nestjs/common");
class ResponseObject {
    static success(data, status = common_1.HttpStatus.OK) {
        return {
            data,
            statusCode: status,
            success: true,
            message: null,
        };
    }
    static fail(data, message) {
        return {
            data,
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message,
        };
    }
}
exports.ResponseObject = ResponseObject;
//# sourceMappingURL=response-object.js.map
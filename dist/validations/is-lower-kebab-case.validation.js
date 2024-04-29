"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLowerCaseKebabCase = exports.IsLowerCaseKebabCaseConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsLowerCaseKebabCaseConstraint = class IsLowerCaseKebabCaseConstraint {
    validate(value) {
        if (value !== value.toLowerCase()) {
            return false;
        }
        const regex = /^[a-z]+(-[a-z0-9]+)*$/;
        return regex.test(value);
    }
    defaultMessage() {
        return 'The property must be in kebab-case and all lowercase';
    }
};
IsLowerCaseKebabCaseConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isLowerCaseKebabCase', async: false })
], IsLowerCaseKebabCaseConstraint);
exports.IsLowerCaseKebabCaseConstraint = IsLowerCaseKebabCaseConstraint;
function IsLowerCaseKebabCase(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            propertyName,
            name: 'isLowerCaseKebabCase',
            target: object.constructor,
            options: validationOptions,
            validator: IsLowerCaseKebabCaseConstraint,
        });
    };
}
exports.IsLowerCaseKebabCase = IsLowerCaseKebabCase;
//# sourceMappingURL=is-lower-kebab-case.validation.js.map
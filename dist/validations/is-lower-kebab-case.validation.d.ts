import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsLowerCaseKebabCaseConstraint implements ValidatorConstraintInterface {
    validate(value: string): boolean;
    defaultMessage(): string;
}
export declare function IsLowerCaseKebabCase(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;

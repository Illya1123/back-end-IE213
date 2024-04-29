import { HttpStatus } from '@nestjs/common';
export declare class ResponseObject<T> {
    success: boolean;
    data: T;
    message: string;
    statusCode: number;
    static success<T>(data?: T, status?: HttpStatus): ResponseObject<T>;
    static fail<T>(data: T, message: string): ResponseObject<T>;
}

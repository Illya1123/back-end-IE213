/// <reference types="multer" />
import { v2 as Cloudinary, UploadApiResponse } from 'cloudinary';
type Cloudinary = typeof Cloudinary;
export declare class CloudinaryService {
    private readonly cloudinary;
    constructor(cloudinary: Cloudinary);
    upload(file: Express.Multer.File): Promise<UploadApiResponse>;
    streamUpload(file: Express.Multer.File): Promise<UploadApiResponse>;
}
export {};

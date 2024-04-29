/// <reference types="multer" />
import { CloudinaryService } from '../cloudinary/cloudinary.service';
type MulterFile = Express.Multer.File;
export declare class FileService {
    private cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadFile(file: MulterFile): Promise<import("cloudinary").UploadApiResponse>;
}
export {};

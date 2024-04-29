import { DynamicModule } from '@nestjs/common';
import { CloudinaryModuleAsyncOptions, CloudinaryModuleOptions } from './cloudinary-options.interface';
export declare class CloudinaryModule {
    static register(options: CloudinaryModuleOptions): DynamicModule;
    static registerAsync(options: CloudinaryModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
    private static createProviders;
}

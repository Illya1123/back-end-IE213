/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand, BrandDocument } from './schemas/brand.schema';
export declare class BrandService {
    private readonly brandModel;
    constructor(brandModel: Model<BrandDocument>);
    getBrands(): Promise<Brand[]>;
    getBrandBySlugOrId(identifier: string | number): Promise<Brand>;
    createBrand(createBrandDto: CreateBrandDto): Promise<Brand>;
    deleteAll(): Promise<void>;
    getDetailBrandBySlug(slug: string): Promise<{
        subBrands: (import("mongoose").Document<unknown, any, Brand> & Brand & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        name: string;
        id?: number;
        description: string;
        icon: string;
        sharedUrl: string;
        slug: string;
        parentId: number;
        _id: import("mongoose").Types.ObjectId;
    }>;
    getBrandsInCategory(slug: string): Promise<Brand[]>;
}

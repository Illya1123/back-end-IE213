import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ProductItemDto {
    @IsString()
    @ApiProperty({ required: true, type: String })
    productId: string;

    @IsString()
    @ApiProperty({ required: true, type: String })
    skuId: string;

    @IsString()
    @ApiProperty({ required: true, type: String })
    img: string;

    @IsString()
    @ApiProperty({ required: true, type: String })
    name: string;
  
    @IsNumber()
    @ApiProperty({ required: true, type: Number })
    quantity: number;
  }

  export class CreateCartDto {
    @IsString()
    @ApiProperty({ required: true, type: String })
    userId: string;

    @IsArray()
    @Type(() => ProductItemDto)
    @ValidateNested({ each: true })
    @ApiProperty({ required: true, type: [ProductItemDto] })
    products: ProductItemDto[];

  }
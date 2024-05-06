import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ProductItemDto {
  @IsString()
  @ApiProperty({ required: true, type: String })
  productId: string;

  @IsNumber()
  @ApiProperty({ required: true, type: Number })
  quantity: number;
}

export class CreateOrderDto {
  @IsString()
  @ApiProperty({ required: true, type: String })
  userId: string;

  @IsArray()
  @Type(() => ProductItemDto)
  @ValidateNested({ each: true })
  @ApiProperty({ required: true, type: [ProductItemDto] })
  products: ProductItemDto[];

  @IsString()
  @ApiProperty({ required: true, type: String })
  name: string;

  @IsNumber()
  @ApiProperty({ required: true, type: Number })
  totalPrice: number;

  @IsString()
  @ApiProperty({ required: true, type: String })
  address: string;

  @IsString()
  @ApiProperty({ required: true, type: String })
  phoneNumber: string;

  @IsString()
  @ApiProperty({ required: true, type: String })
  paymentMethod: string;

  @IsString()
  @ApiProperty({ required: false, type: String, default: 'pending' })
  status: string;
}

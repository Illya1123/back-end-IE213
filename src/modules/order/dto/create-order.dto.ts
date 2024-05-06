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

  @IsNumber()
  @ApiProperty({ required: true, type: Number })
  totalPrice: number;

  @ApiProperty({ required: true, type: String })
  shippingAddress: {
    phoneNumber: string;
    ward: string;
    district: string;
    province: string;
  };

  @IsString()
  @ApiProperty({ required: true, type: String })
  paymentMethod: string;

  @IsString()
  @ApiProperty({ required: false, type: String, default: 'pending' })
  status: string;
}

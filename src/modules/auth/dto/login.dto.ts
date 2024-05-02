import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    required: true,
    example: 'quocanh',
  })
  @IsString()
  readonly username: string;

  @ApiProperty({
    required: true,
    example: 'quocanh',
  })
  @IsString()
  readonly password: string;
}

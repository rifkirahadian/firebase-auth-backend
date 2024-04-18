import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty()
  uid: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class LastLoginDto {
  @ApiProperty()
  @IsNotEmpty()
  uid: string;
}

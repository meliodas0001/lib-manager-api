import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class BookBodyDTO {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @ApiProperty()
  available: boolean;
}

export class BookBodyIdDTO {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @ApiProperty()
  available: boolean;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id: string;
}

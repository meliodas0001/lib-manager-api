import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsUUID } from 'class-validator';

export class LoansDTO {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id_book: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id_user: string;
}

export class LoansPutDTO {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id_book: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id_user: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  loans_devolution: Date;
}

export class LoansParam {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  id_book: string;
}

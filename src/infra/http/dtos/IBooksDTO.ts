import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class BookBodyDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  available: boolean;
}

export class BookBodyIdDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  available: boolean;

  @IsNotEmpty()
  @IsUUID()
  id: string;
}

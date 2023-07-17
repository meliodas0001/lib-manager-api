import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class UserBodyDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UserBodyIdDTO {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UserIdParam {
  @IsUUID()
  id: string;
}

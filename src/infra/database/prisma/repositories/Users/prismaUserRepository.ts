import { Injectable } from '@nestjs/common';
import {
  UserDTO,
  UserRepository,
} from '@app/repositories/Users/userRepository';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: UserDTO): Promise<void> {
    const { email, name, password } = user;

    await this.prismaService.users.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
  async findByEmail(email: string): Promise<UserDTO> {
    const user = await this.prismaService.users.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async getAllUsers(): Promise<UserDTO[]> {
    const users = await this.prismaService.users.findMany({
      take: 10,
    });

    return users;
  }
}

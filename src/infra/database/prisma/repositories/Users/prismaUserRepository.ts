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
      select: {
        email: true,
        id: true,
        name: true,
        password: false,
      },
    });

    return users;
  }

  async getUserById(id: string): Promise<UserDTO> {
    const user = await this.prismaService.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
      },
    });

    return user;
  }

  async updateUser(user: UserDTO): Promise<void> {
    const { id, email, password, name } = user;

    await this.prismaService.users.update({
      where: {
        id,
      },
      data: {
        email,
        password,
        name,
      },
    });
  }

  async deleteUser(id: string): Promise<void> {
    await this.prismaService.users.delete({
      where: {
        id,
      },
    });
  }
}

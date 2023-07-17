import {
  UserDTO,
  UserRepository,
} from '@app/repositories/Users/userRepository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  async getAllUsers(): Promise<UserDTO[]> {
    const users = await this.usersRepository.getAllUsers();

    return users;
  }

  async createUser(user: UserDTO): Promise<void> {
    let { email, password } = user;
    const finder = await this.usersRepository.findByEmail(email);

    if (finder) throw new UnauthorizedException('Account already exist');

    password = await bcrypt.hash(password, 10);
    user = { ...user, password };

    await this.usersRepository.create(user);
  }

  async findUserById(id: string): Promise<UserDTO> {
    const finder = await this.usersRepository.getUserById(id);

    return finder;
  }

  async updateUser(user: UserDTO, id: string) {
    let password = await bcrypt.hash(user.password, 10);

    user = { ...user, id, password };

    await this.usersRepository.updateUser(user);
  }

  async deleteUser(id: string) {
    await this.usersRepository.deleteUser(id);
  }
}

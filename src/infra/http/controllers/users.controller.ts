import { UsersService } from '@app/useCases/Users/users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserBodyDTO } from '../dtos/IUsersDTO';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();

    return users;
  }

  @Post()
  async createUser(@Body() user: UserBodyDTO) {
    await this.userService.createUser(user);
  }
}

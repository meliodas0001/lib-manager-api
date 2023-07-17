import { UsersService } from '@app/useCases/Users/users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserBodyDTO, UserIdParam } from '../dtos/IUsersDTO';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();

    return users;
  }

  @Get(':id')
  async getUser(@Param() userid: UserIdParam) {
    const { id } = userid;
    const user = await this.userService.findUserById(id);

    return user;
  }

  @Post()
  async createUser(@Body() user: UserBodyDTO) {
    await this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Body() user: UserBodyDTO, @Param() userId: UserIdParam) {
    const { id } = userId;

    await this.userService.updateUser(user, id);
  }

  @Delete(':id')
  async deleteUser(@Param() userId: UserIdParam) {
    const { id } = userId;

    await this.userService.deleteUser(id);
  }
}

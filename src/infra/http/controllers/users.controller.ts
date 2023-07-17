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
import { UserBodyDTO, UserIdParam, UserResponseDTO } from '../dtos/IUsersDTO';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Retrieves a list of all users.' })
  @ApiResponse({
    status: 200,
    description: 'List of users.',
    type: [UserResponseDTO],
  })
  @Get()
  async getAllUsers(): Promise<UserResponseDTO[]> {
    const users = await this.userService.getAllUsers();
    return users.map(({ id, name, email }) => ({ id, name, email }));
  }

  @ApiOperation({ summary: 'Retrieves a user by ID.' })
  @ApiParam({ name: 'id', description: 'ID of the user', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'User details.',
    type: UserResponseDTO,
  })
  @Get(':id')
  async getUser(@Param() params: UserIdParam): Promise<UserResponseDTO> {
    const { id } = params;
    const user = await this.userService.findUserById(id);
    return { id: user.id, name: user.name, email: user.email };
  }

  @ApiOperation({ summary: 'Creates a new user.' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @Post()
  async createUser(@Body() user: UserBodyDTO) {
    await this.userService.createUser(user);
  }

  @ApiOperation({ summary: 'Updates a user by ID.' })
  @ApiParam({ name: 'id', description: 'ID of the user', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  @Put(':id')
  async updateUser(@Param() params: UserIdParam, @Body() user: UserBodyDTO) {
    const { id } = params;
    await this.userService.updateUser(user, id);
  }

  @ApiOperation({ summary: 'Deletes a user by ID.' })
  @ApiParam({ name: 'id', description: 'ID of the user', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
  })
  @Delete(':id')
  async deleteUser(@Param() params: UserIdParam) {
    const { id } = params;
    await this.userService.deleteUser(id);
  }
}

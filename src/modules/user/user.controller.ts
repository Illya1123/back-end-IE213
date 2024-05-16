import { Body, Controller, Get, Post, Param, NotFoundException } from '@nestjs/common';

import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@ApiBearerAuth('access-token')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':username') 
  @ApiParam({ name: 'username', type: String, description: 'Username of the user to find' })
  async findOneByUsername(@Param('username') username: string): Promise<User> {
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}

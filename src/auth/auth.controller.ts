import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    try {
      return await this.authService.authenticate(body.email, body.password);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err);
    }
  }

  @Post('register')
  async register(@Body() body: Prisma.UserCreateInput) {
    try {
      return await this.userService.create(body);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

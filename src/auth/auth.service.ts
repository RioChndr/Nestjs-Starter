import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async authenticate(email: string, password: string) {
    try {
      const user = await this.userService.validateUser(email, password);

      const token = jwt.sign(
        {
          uid: user.id,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: '7d',
        },
      );
      return { token };
    } catch (err) {
      throw err;
    }
  }
}

export class NotAuthenticatedException extends Error {
  name = 'NotAuthenticatedException';
  message = 'Not authenticated, token are not valid';
}

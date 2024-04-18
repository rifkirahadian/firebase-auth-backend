import { Body, Controller, Post, Put, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LastLoginDto, RegisterDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Res() res: Response, @Body() payload: RegisterDto) {
    try {
      await this.authService.create(payload);
    } catch (error) {
      return res.status(400).json({
        message:
          error.name === 'UniqueConstraintViolationException'
            ? 'Username/Uid has been used'
            : error.message,
      });
    }

    return res.json({
      message: 'User registered',
    });
  }

  @Put('last-login')
  async lastLogin(@Res() res: Response, @Body() payload: LastLoginDto) {
    try {
      const user = await this.authService.getUser(payload.uid);
      await this.authService.updateLastLogin(user);
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.json({
      message: 'User last login updated',
    });
  }
}

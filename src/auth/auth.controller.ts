import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { RegisterDto } from './auth.dto';

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
            ? 'Username has been used'
            : error.message,
      });
    }

    return res.json({
      message: 'User registered',
    });
  }
}

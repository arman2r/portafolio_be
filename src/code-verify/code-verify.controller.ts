import { FollowersService } from './../followers/followers.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CodeVerifyService } from './code-verify.service';
import { CreateCodeVerifyDto } from './dto/create-code-verify.dto';
import { AuthService } from 'src/auth/auth.service';
import { prismaService } from 'src/prisma/prisma.service';

@Controller('code-verify')
export class CodeVerifyController {
  constructor(
    private readonly codeVerifyService: CodeVerifyService,
    private readonly authService: AuthService,
    private readonly prisma: prismaService,
    private readonly FollowersService: FollowersService,
  ) {}

  @Post()
  async create(@Body() createCodeVerifyDto: CreateCodeVerifyDto) {
    // Generar código automáticamente si no viene en el DTO
    if (!createCodeVerifyDto.code) {
      createCodeVerifyDto.code = this.codeVerifyService.generateRandomCode(6);
    }

    return this.codeVerifyService.create(createCodeVerifyDto);
  }

  @Post('verify-and-login')
  async verifyAndLogin(
    @Body() { email, code }: { email: string; code: string },
  ) {
    // 1. Verificar el código
    const verification = await this.codeVerifyService.verifyCode(email, code);

    if (!verification.isValid) {
      throw new Error('Código inválido o expirado');
    }

    // 2. Actualizar usuario como confirmado (opcional)
    const subscriber = await this.prisma.subscribers.findUnique({
      where: { email },
    });
    if (!subscriber) {
      await this.FollowersService.create({
        email,
        isConfirmed: true,
        names: '',
        lastNames: '',
        phone: '',
      });
    } else {
      await this.prisma.subscribers.update({
        where: { email },
        data: { isConfirmed: true },
      });
    }

    // 3. Generar token JWT
    const tokenData = await this.authService.generateSubscriberToken(email);

    return {
      success: true,
      message: 'Autenticación exitosa',
      ...tokenData,
    };
  }
}

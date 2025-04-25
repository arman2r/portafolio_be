/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CreateCodeVerifyDto } from './dto/create-code-verify.dto';
import { prismaService } from 'src/prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';
import * as crypto from 'crypto';

@Injectable()
export class CodeVerifyService {
  constructor(
    private prisma: prismaService,
    private mailerService: MailerService,
  ) {}

  async create(createCodeVerifyDto: CreateCodeVerifyDto) {
    const { email, subscriberEmail, userAdminEmail } = createCodeVerifyDto;

    // Validación adicional para asegurar que solo un email esté presente
    if (subscriberEmail && userAdminEmail) {
      throw new Error(
        'Solo puede proporcionar subscriberEmail o userAdminEmail, no ambos',
      );
    }

    const targetEmail = subscriberEmail || email;
    const code = this.generateRandomCode(6);
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutos

    try {
      // Eliminar códigos previos para este email
      await this.prisma.verificationCode.deleteMany({
        where: {
          OR: [{ email: targetEmail }, { subscriberEmail: targetEmail }],
        },
      });

      // Crear nuevo código
      const verificationCode = await this.prisma.verificationCode.create({
        data: {
          email: targetEmail,
          subscriberEmail: targetEmail,
          code,
          expiresAt,
        },
      });

      // Enviar por correo
      await this.sendVerificationEmail(targetEmail, code);

      return {
        success: true,
        message: 'Código de verificación generado y enviado',
        expiresAt: verificationCode.expiresAt,
        code: verificationCode.code, // Solo para desarrollo, quitar en producción
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        success: false,
        message: 'Error al generar el código de verificación',
      };
    }
  }

  generateRandomCode(length: number): string {
    return crypto
      .randomInt(10 ** (length - 1), 10 ** length)
      .toString()
      .padStart(length, '0');
  }

  private async sendVerificationEmail(
    email: string,
    code: string,
  ): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Tu código de verificación',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Verificación de cuenta</h2>
            <p style="font-size: 16px;">Utiliza el siguiente código para completar tu verificación:</p>
            <div style="background: #f3f4f6; padding: 15px; text-align: center; margin: 20px 0; border-radius: 5px;">
              <span style="font-size: 24px; font-weight: bold; letter-spacing: 2px;">${code}</span>
            </div>
            <p style="font-size: 14px; color: #6b7280;">Este código expirará en 30 minutos.</p>
          </div>
        `,
      });
    } catch (error) {
      console.error('Error enviando email:', error);
      throw new Error('Error al enviar el correo electrónico');
    }
  }

  // Método para verificar el código (opcional)
  async verifyCode(email: string, code: string) {
    const validCode = await this.prisma.verificationCode.findFirst({
      where: {
        code,
        OR: [{ subscriberEmail: email }, { userAdminEmail: email }],
        expiresAt: { gt: new Date() },
      },
    });

    if (!validCode) {
      return { isValid: false };
    }

    // Eliminar el código después de usarlo (opcional)
    await this.prisma.verificationCode.delete({
      where: { id: validCode.id },
    });

    return { isValid: true };
  }
}

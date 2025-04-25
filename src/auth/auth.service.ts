import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: prismaService,
  ) {}

  async generateSubscriberToken(email: string) {
    // Obtener usuario con sus likes
    const subscriber = await this.prisma.subscribers.findUnique({
      where: { email },
      include: {
        likeSubscribers: {
          select: {
            id: true,
            urlSection: true,
            createdAt: true,
          },
        },
      },
    });

    if (!subscriber) {
      throw new Error('Usuario no encontrado');
    }

    // Estructurar payload del token
    const payload = {
      sub: subscriber.id,
      email: subscriber.email,
      names: subscriber.names,
      lastNames: subscriber.lastNames,
      phone: subscriber.phone,
      likes: subscriber.likeSubscribers.map((like) => ({
        id: like.id,
        urlSection: like.urlSection,
      })),
      isConfirmed: subscriber.isConfirmed,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }
}

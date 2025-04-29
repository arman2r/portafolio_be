import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('send')
  async sendContact(
    @Body()
    contactDto: {
      names: string;
      lastNames: string;
      phone: string;
      email: string;
      companyName?: string;
      reason: 'Entrevista' | 'Cotizar Servicios' | 'Otros';
      message: string;
      terms: boolean;
    },
  ) {
    await this.contactService.sendContactEmail(contactDto);
    return { success: true, message: 'Correo enviado exitosamente.' };
  }
}

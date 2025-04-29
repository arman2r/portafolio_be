import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { env } from 'process';

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) {}

  async sendContactEmail(contactData: {
    names: string;
    lastNames: string;
    phone: string;
    email: string;
    companyName?: string;
    reason: 'Entrevista' | 'Cotizar Servicios' | 'Otros';
    message: string;
    terms: boolean;
  }): Promise<void> {
    const {
      names,
      lastNames,
      phone,
      email,
      companyName,
      reason,
      message,
      terms,
    } = contactData;

    if (!terms) {
      throw new Error('Debe aceptar las políticas de privacidad.');
    }

    try {
      await this.mailerService.sendMail({
        to: env.MAIL_USER, // <-- Aquí pon el correo donde quieres recibir los mensajes
        subject: `Nuevo contacto: ${reason}`,
        html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
                <p><strong>Nombre(s):</strong> ${names}</p>
                <p><strong>Apellido(s):</strong> ${lastNames}</p>
                <p><strong>Teléfono o WhatsApp:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Nombre de la empresa:</strong> ${companyName}</p>
                <p><strong>Motivo:</strong> ${reason}</p>
                <p><strong>Mensaje:</strong><br/>${message}</p>
              </div>
            `,
      });
    } catch (error) {
      console.error('Error enviando el correo de contacto:', error);
      throw new Error('Error al enviar el correo de contacto.');
    }
  }
}

import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [MailerModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}

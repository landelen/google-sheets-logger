import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendMail(): void {
    this.mailerService.sendMail({
      to: 'pulatovihor@gmail.com',
      from: '1dishore@gmail.com',
      subject: 'Testing',
      text: 'test',
      html: '<b>welcome<b>',
    });
  }
}

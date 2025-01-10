import { ISendMailOptions } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

export const emailOptions = (
  configService: ConfigService,
): ISendMailOptions => ({
  to: configService.get<string>('EMAIL_TO'),
  from: configService.get<string>('EMAIL_FROM'),
  subject: '3 rows changed',
  text: 'test',
  html: '<b>welcome<b>',
});

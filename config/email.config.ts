import { ISendMailOptions } from '@nestjs-modules/mailer';

export const emailOptions = (): ISendMailOptions => ({
  to: 'pulatovihor@gmail.com',
  from: '1dishore@gmail.com',
  subject: '10 rows changed',
  text: 'test',
  html: '<b>welcome<b>',
});

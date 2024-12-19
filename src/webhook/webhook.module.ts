import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { RowsModule } from 'src/rows/rows.module';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [RowsModule],
  providers: [EmailService],
  controllers: [WebhookController],
})
export class WebhookModule {}

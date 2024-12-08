import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { RowsModule } from 'src/rows/rows.module';

@Module({
  imports: [RowsModule],
  providers: [WebhookService],
  controllers: [WebhookController],
})
export class WebhookModule {}

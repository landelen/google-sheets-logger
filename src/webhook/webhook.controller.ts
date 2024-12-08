import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { CreateRowDto } from 'src/rows/dto/row.dto';
import { RowsService } from 'src/rows/rows.service';

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly webhookService: WebhookService,
    private readonly rowService: RowsService,
  ) {}

  @Post()
  async handleWebhook(@Body() payload: CreateRowDto): Promise<void> {
    this.webhookService.handleWebhook(payload);
    await this.rowService.create(payload);
  }
}

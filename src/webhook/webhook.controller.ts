import { Body, Controller, Post } from '@nestjs/common';
import { CreateRowDto } from 'src/rows/dto/row.dto';
import { RowsService } from 'src/rows/rows.service';
import { EmailService } from 'src/email/email.service';

@Controller('webhook')
export class WebhookController {
  private changes: CreateRowDto[] = [];
  constructor(
    private readonly rowService: RowsService,
    private readonly mailService: EmailService,
  ) {}

  @Post()
  async handleWebhook(@Body() payload: CreateRowDto): Promise<void> {
    this.changes.push(payload);

    if (this.changes.length >= 3) {
      this.mailService.sendMail();
      this.changes = [];
    }

    await this.rowService.createRow(payload);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  handleWebhook(payload: any): void {
    console.log(`Payload:`, payload);
  }
}

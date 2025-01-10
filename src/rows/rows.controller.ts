import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { RowsService } from './rows.service';
import { Row } from './entities/row.entity';
import { LogRequest } from 'src/decorators/logger.decorator';
import { EmailService } from 'src/email/email.service';

@Controller('rows')
export class RowsController {
  constructor(
    private readonly rowService: RowsService,
    private readonly mailService: EmailService,
  ) {}

  @Get()
  @LogRequest()
  async findAll(): Promise<Row[]> {
    return this.rowService.findAllRows();
  }

  @Get(':id')
  @LogRequest()
  async findOne(@Param('id') id: number): Promise<Row> {
    try {
      this.mailService.sendMail();
      return await this.rowService.findRowById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}

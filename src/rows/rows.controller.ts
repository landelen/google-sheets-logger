import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { RowsService } from './rows.service';
import { Row } from './entities/row.entity';

@Controller('rows')
export class RowsController {
  constructor(private readonly rowService: RowsService) {}

  @Get()
  async findAll(): Promise<Row[]> {
    return this.rowService.findAllRows();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Row> {
    try {
      return await this.rowService.findRow(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}

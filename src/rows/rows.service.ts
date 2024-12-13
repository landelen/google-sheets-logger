import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Row } from './entities/row.entity';
import { Repository } from 'typeorm';
import { CreateRowDto } from './dto/row.dto';

@Injectable()
export class RowsService {
  constructor(
    @InjectRepository(Row)
    private readonly rowRepository: Repository<Row>,
  ) {}

  async createRow(createRowDto: CreateRowDto): Promise<Row> {
    const row = this.rowRepository.create(createRowDto);
    return this.rowRepository.save(row);
  }

  async findAllRows(): Promise<Row[]> {
    return this.rowRepository.find();
  }

  async findRow(id: number): Promise<Row> {
    const row = this.rowRepository.findOneBy({ id });

    if (!row) {
      throw new Error(`Not found`);
    }

    return row;
  }
}

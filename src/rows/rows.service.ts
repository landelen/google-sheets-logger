import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Row } from './entities/row.entity';
import { Repository } from 'typeorm';
import { CreateRowDto } from './dto/row.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RowsService {
  constructor(
    @InjectRepository(Row)
    private readonly rowRepository: Repository<Row>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async createRow(createRowDto: CreateRowDto): Promise<Row> {
    const row = this.rowRepository.create(createRowDto);
    return this.rowRepository.save(row);
  }

  async findAllRows(): Promise<Row[]> {
    const cacheKey = 'all_rows';
    const cached = await this.cacheManager.get<Row[]>(cacheKey);

    if (cached) {
      console.log('test');
      return cached;
    }

    const rows = await this.rowRepository.find();
    await this.cacheManager.set(cacheKey, rows, 6000);
    return rows;
  }

  async findRow(id: number): Promise<Row> {
    const row = await this.rowRepository.findOneBy({ id });

    const cacheKey = `row_${id}`;
    const cached = await this.cacheManager.get<Row>(cacheKey);

    if (cached) {
      return cached;
    }

    if (!row) {
      throw new Error(`Not found`);
    }

    await this.cacheManager.set(cacheKey, row, 6000);
    return row;
  }
}

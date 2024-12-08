import { Module } from '@nestjs/common';
import { RowsService } from './rows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Row } from './entities/row.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Row])],
  providers: [RowsService],
  exports: [RowsService],
})
export class RowsModule {}

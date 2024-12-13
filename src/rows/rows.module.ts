import { Module } from '@nestjs/common';
import { RowsService } from './rows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Row } from './entities/row.entity';
import { RowsController } from './rows.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Row])],
  providers: [RowsService],
  exports: [RowsService],
  controllers: [RowsController],
})
export class RowsModule {}

import { Module } from '@nestjs/common';
import { RowsService } from './rows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Row } from './entities/row.entity';
import { RowsController } from './rows.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [TypeOrmModule.forFeature([Row]), CacheModule.register()],
  providers: [RowsService, EmailService],
  exports: [RowsService],
  controllers: [RowsController],
})
export class RowsModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbOptions } from 'config/database.config';
import { WebhookModule } from './webhook/webhook.module';
import { RowsModule } from './rows/rows.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(dbOptions()),
    WebhookModule,
    RowsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

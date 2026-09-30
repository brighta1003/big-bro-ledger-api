import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LoansModule } from './loans/loans.module.js';

@Module({
  imports: [LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

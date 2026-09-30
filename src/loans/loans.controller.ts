import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoansService } from './loans.service.js';
import { CreateLoanDto } from './dto/create-loan.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Get()
  findAll() {
    return this.loansService.findAll();
  }

  @Post()
  create(@Body() dto: CreateLoanDto) {
    return this.loansService.create(dto);
  }
}
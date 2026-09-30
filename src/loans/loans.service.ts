import { Injectable } from '@nestjs/common';
import type { CreateLoanDto } from './dto/create-loan.dto.js';

@Injectable()
export class LoansService {
  private loans = [
    {
      id: 1,
      borrower: '小明',
      item: '現金',
      amount: 1500,
      loanDate: '2026-09-30',
      isRepaid: false,
    },
  ];

  private nextId = 2;

  findAll() {
    return this.loans;
  }

  create(dto: CreateLoanDto) {
    const loan = {
      id: this.nextId++,
      borrower: dto.borrower,
      item: dto.item,
      amount: dto.amount,
      loanDate: dto.loanDate,
      isRepaid: false,
    };

    this.loans.push(loan);

    return loan;
  }
}
import { Injectable } from '@nestjs/common';

import {
  LoansDTO,
  LoansRepository,
} from '@app/repositories/Loans/loansRepository';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaLoansRepository implements LoansRepository {
  constructor(private prismaService: PrismaService) {}

  async create(loans: LoansDTO): Promise<void> {
    const { id_book, id_user, loans_date } = loans;

    await this.prismaService.loans.create({
      data: {
        id_book,
        id_user,
        loans_date,
      },
    });
  }
  async findBookId(bookId: string): Promise<LoansDTO> {
    const loansFinder = await this.prismaService.loans.findUnique({
      where: {
        id_book: bookId,
      },
    });

    return loansFinder;
  }
  async findUserId(userId: string): Promise<LoansDTO[]> {
    const loansFinder = await this.prismaService.loans.findMany({
      where: {
        id_user: userId,
      },
    });

    return loansFinder;
  }
}

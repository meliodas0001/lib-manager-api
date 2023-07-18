import { Injectable } from '@nestjs/common';

import {
  LoansDTO,
  LoansParamDTO,
  LoansRepository,
} from '@app/repositories/Loans/loansRepository';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaLoansRepository implements LoansRepository {
  constructor(private prismaService: PrismaService) {}

  async create(loans: LoansDTO): Promise<void> {
    const { id_book, id_user } = loans;

    await this.prismaService.loans.create({
      data: {
        id_book,
        id_user,
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

  async deleteLoansBookId(bookId: string): Promise<void> {
    await this.prismaService.loans.delete({
      where: {
        id_book: bookId,
      },
    });
  }

  async updateLoansBookId(book: LoansParamDTO): Promise<void> {
    const { id_book, id_user, loans_devolution } = book;

    await this.prismaService.loans.update({
      where: {
        id_book,
      },
      data: {
        id_user,
        id_book,
        loans_devolution,
      },
    });
  }

  async getAllLoans(): Promise<LoansDTO[]> {
    const loans = await this.prismaService.loans.findMany();

    return loans;
  }
}

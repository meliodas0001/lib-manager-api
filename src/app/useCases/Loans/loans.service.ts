import {
  LoansParamDTO,
  LoansRepository,
} from '@app/repositories/Loans/loansRepository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class LoansService {
  constructor(private loansRepository: LoansRepository) {}

  async loansGetAll() {
    const loans = await this.loansRepository.getAllLoans();

    return loans;
  }

  async loansCreate(loans: LoansParamDTO) {
    await this.loansRepository.create(loans);
  }

  async loansGetById(bookId: string) {
    const loansBook = await this.loansRepository.findBookId(bookId);

    if (!loansBook) throw new NotFoundException('Loan not found');

    return loansBook;
  }

  async deleteLoan(bookId: string) {
    const loansFind = await this.loansRepository.findBookId(bookId);

    if (!loansFind) throw new NotFoundException('Loan not found');

    await this.loansRepository.deleteLoansBookId(bookId);
  }

  async updateLoan(loan: LoansParamDTO) {
    const loanFind = await this.loansRepository.findBookId(loan.id_book);

    if (!loanFind) throw new NotFoundException('Loan not found');

    if (!loan.loans_devolution)
      throw new BadRequestException('Missing loans_devolution');

    await this.loansRepository.updateLoansBookId(loan);
  }
}

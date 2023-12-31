export interface LoansDTO {
  id?: string;
  id_book: string;
  id_user: string;
  loans_date?: Date;
  loans_devolution?: Date;
}

export interface LoansParamDTO {
  id_book: string;
  id_user: string;
  loans_date?: Date;
  loans_devolution?: Date;
}

export abstract class LoansRepository {
  abstract create(loans: LoansDTO): Promise<void>;
  abstract findBookId(bookId: string): Promise<LoansDTO>;
  abstract findUserId(userId: string): Promise<LoansDTO[]>;
  abstract updateLoansBookId(book: LoansParamDTO): Promise<void>;
  abstract deleteLoansBookId(bookId: string): Promise<void>;
  abstract getAllLoans(): Promise<LoansDTO[]>;
}

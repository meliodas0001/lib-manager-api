import {
  BooksRepository,
  BooksDTO,
} from '@app/repositories/Books/booksRepository';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) {}

  async createBook(book: BooksDTO): Promise<void> {
    await this.booksRepository.create(book);
  }

  async updateBook(book: BooksDTO): Promise<void> {
    const findBook = this.booksRepository.findId(book.id);

    if (!findBook) throw new UnauthorizedException('Book not found');

    await this.booksRepository.updateBook(book);
  }
}

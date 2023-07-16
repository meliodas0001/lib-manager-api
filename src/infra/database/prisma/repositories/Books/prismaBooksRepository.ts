import {
  BooksRepository,
  BooksDTO,
} from '@app/repositories/Books/booksRepository';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBooksRepository implements BooksRepository {
  constructor(private prismaService: PrismaService) {}

  async create(book: BooksDTO): Promise<void> {
    const { author, available, title } = book;

    await this.prismaService.books.create({
      data: {
        author,
        available,
        title,
      },
    });
  }
  findName(bookName: string): Promise<BooksDTO[]> {
    const bookFinder = this.prismaService.books.findMany({
      where: {
        title: bookName,
      },
    });

    return bookFinder;
  }
  findId(bookId: string): Promise<BooksDTO> {
    const bookFinder = this.prismaService.books.findUnique({
      where: {
        id: bookId,
      },
    });

    return bookFinder;
  }
}

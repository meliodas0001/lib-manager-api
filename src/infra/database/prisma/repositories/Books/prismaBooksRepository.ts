import {
  BooksRepository,
  BooksDTO,
} from '@app/repositories/Books/booksRepository';
import { PrismaService } from '../../prisma.service';
import { Body, Injectable } from '@nestjs/common';

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
  async findName(bookName: string): Promise<BooksDTO[]> {
    const bookFinder = await this.prismaService.books.findMany({
      where: {
        title: bookName,
      },
      take: 10,
    });

    return bookFinder;
  }
  async findId(bookId: string): Promise<BooksDTO> {
    const bookFinder = await this.prismaService.books.findUnique({
      where: {
        id: bookId,
      },
    });

    return bookFinder;
  }

  async updateBook(book: BooksDTO): Promise<void> {
    const { author, available, title, id } = book;

    if (!id) throw new Error('Missing book Id');

    await this.prismaService.books.update({
      where: {
        id,
      },
      data: {
        author,
        available,
        title,
      },
    });
  }

  async getAllBooks(): Promise<BooksDTO[]> {
    const books = await this.prismaService.books.findMany({
      take: 10,
    });

    return books;
  }

  async deleteBook(bookId: string): Promise<void> {
    await this.prismaService.books.delete({
      where: {
        id: bookId,
      },
    });
  }
}

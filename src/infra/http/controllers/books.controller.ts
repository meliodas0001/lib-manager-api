import {
  Controller,
  Post,
  Body,
  Put,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { BookBodyDTO, BookBodyIdDTO } from '../dtos/IBooksDTO';
import { BooksService } from '@app/useCases/Books/books.service';

interface BookParamDTO {
  id: string;
}

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  async getAllBooks() {
    const books = await this.booksService.getAllBooks();

    return books;
  }

  @Get(':id')
  async GetBook(@Param() bookId: BookParamDTO) {
    const { id } = bookId;

    const book = await this.booksService.getBook(id);

    return book;
  }

  @Post()
  async createBook(@Body() body: BookBodyDTO) {
    await this.booksService.createBook(body);
  }

  @Put(':id')
  async updateBookById(
    @Body() body: BookBodyDTO,
    @Param() bookId: BookParamDTO,
  ) {
    const book = { ...body, ...bookId };
    console.log(book);

    await this.booksService.updateBook(book);
  }

  @Put()
  async updateBook(@Body() body: BookBodyIdDTO) {
    await this.booksService.updateBook(body);
  }

  @Delete(':id')
  async deleteBook(@Param() bookId: BookParamDTO) {
    const { id } = bookId;

    await this.booksService.deleteBook(id);
  }
}

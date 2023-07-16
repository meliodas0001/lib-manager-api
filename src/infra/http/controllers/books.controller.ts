import { Controller, Post, Body, Put } from '@nestjs/common';
import { IBooksDTO } from '../dtos/IBooksDTO';
import { BooksService } from '@app/useCases/Books/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async createBook(@Body() body: IBooksDTO) {
    await this.booksService.createBook(body);
  }

  @Put()
  async updateBook(@Body() body: IBooksDTO) {
    await this.booksService.updateBook(body);
  }
}

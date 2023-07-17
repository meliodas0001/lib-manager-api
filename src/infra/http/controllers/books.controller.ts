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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

interface BookParamDTO {
  id: string;
}

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @ApiOperation({ summary: 'Retrieves a list of all books.' })
  @ApiResponse({
    status: 200,
    description: 'List of books.',
    type: [BookBodyIdDTO],
  })
  @Get()
  async getAllBooks() {
    const books = await this.booksService.getAllBooks();
    return books;
  }

  @ApiOperation({ summary: 'Retrieves a book by ID.' })
  @ApiParam({ name: 'id', description: 'ID of the book', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'Book details.',
    type: BookBodyIdDTO,
  })
  @Get(':id')
  async getBookById(@Param() params: BookParamDTO) {
    const { id } = params;
    const book = await this.booksService.getBookId(id);
    return book;
  }

  @ApiOperation({ summary: 'Creates a new book.' })
  @ApiBody({ type: BookBodyDTO })
  @ApiResponse({
    status: 201,
    description: 'The book has been successfully created.',
  })
  @Post()
  async createBook(@Body() body: BookBodyDTO) {
    await this.booksService.createBook(body);
  }

  @ApiOperation({ summary: 'Updates a book by ID.' })
  @ApiParam({ name: 'id', description: 'ID of the book', type: 'string' })
  @ApiBody({ type: BookBodyDTO })
  @ApiResponse({
    status: 200,
    description: 'The book has been successfully updated.',
  })
  @Put(':id')
  async updateBookById(
    @Param() params: BookParamDTO,
    @Body() body: BookBodyDTO,
  ) {
    const { id } = params;
    const book = { ...body, id };
    await this.booksService.updateBook(book);
  }

  @ApiOperation({ summary: 'Deletes a book by ID.' })
  @ApiParam({ name: 'id', description: 'ID of the book', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The book has been successfully deleted.',
  })
  @Delete(':id')
  async deleteBookById(@Param() params: BookParamDTO) {
    const { id } = params;
    await this.booksService.deleteBook(id);
  }
}

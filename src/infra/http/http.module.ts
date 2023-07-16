import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from '@app/useCases/Books/books.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class HttpModule {}

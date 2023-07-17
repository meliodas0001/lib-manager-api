import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from '@app/useCases/Books/books.service';
import { UserController } from './controllers/users.controller';
import { UsersService } from '@app/useCases/Users/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController, UserController],
  providers: [BooksService, UsersService],
})
export class HttpModule {}

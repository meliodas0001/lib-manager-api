import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { BooksController } from './controllers/books.controller';
import { BooksService } from '@app/useCases/Books/books.service';
import { UserController } from './controllers/users.controller';
import { UsersService } from '@app/useCases/Users/users.service';
import { LoansController } from './controllers/loans.controller';
import { LoansService } from '@app/useCases/Loans/loans.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController, UserController, LoansController],
  providers: [BooksService, UsersService, LoansService],
})
export class HttpModule {}

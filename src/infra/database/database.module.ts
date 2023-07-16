import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { BooksRepository } from '@app/repositories/Books/booksRepository';
import { PrismaBooksRepository } from './prisma/repositories/Books/prismaBooksRepository';
import { LoansRepository } from '@app/repositories/Loans/loansRepository';
import { PrismaLoansRepository } from './prisma/repositories/Loans/prismaLoansRepository';
import { UserRepository } from '@app/repositories/Users/userRepository';
import { PrismaUserRepository } from './prisma/repositories/Users/prismaUserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: BooksRepository,
      useClass: PrismaBooksRepository,
    },
    {
      provide: LoansRepository,
      useClass: PrismaLoansRepository,
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [BooksRepository, LoansRepository, UserRepository],
})
export class DatabaseModule {}

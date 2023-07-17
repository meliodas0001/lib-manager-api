import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Lib Manager')
    .setDescription(
      'The API is a backend service developed using the NestJS framework and Prisma ORM. It provides routes for managing users and books, including operations like creating, retrieving, updating, and deleting users and books. The API utilizes PostgreSQL as the underlying database and incorporates authentication and authorization mechanisms for secure access. It follows best practices for code organization, dependency injection, and error handling, with unit testing in place for reliability.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

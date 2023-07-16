export interface BooksDTO {
  id?: string;
  title: string;
  author: string;
  available: boolean;
}

export abstract class BooksRepository {
  abstract create(book: BooksDTO): Promise<void>;
  abstract findName(bookName: string): Promise<BooksDTO[]>;
  abstract findId(bookId: string): Promise<BooksDTO>;
  abstract updateBook(book: BooksDTO): Promise<void>;
  abstract getAllBooks(): Promise<BooksDTO[]>;
  abstract deleteBook(bookId: string): Promise<void>;
}

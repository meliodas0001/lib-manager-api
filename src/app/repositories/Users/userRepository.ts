export interface UserDTO {
  id?: string;
  name: string;
  email: string;
  password?: string;
}

export abstract class UserRepository {
  abstract create(user: UserDTO): Promise<void>;
  abstract findByEmail(email: string): Promise<UserDTO>;
  abstract getAllUsers(): Promise<UserDTO[]>;
  abstract getUserById(id: string): Promise<UserDTO>;
  abstract updateUser(user: UserDTO): Promise<void>;
  abstract deleteUser(id: string): Promise<void>;
}

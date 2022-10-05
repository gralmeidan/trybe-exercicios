import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const [response] = await this.connection.execute(
      'SELECT id, name, email FROM Users'
    );
    return response as User[];
  }
}

export default UserModel;

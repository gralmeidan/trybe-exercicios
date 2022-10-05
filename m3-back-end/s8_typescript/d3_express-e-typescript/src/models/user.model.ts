import { OkPacket, Pool, RowDataPacket } from 'mysql2/promise';
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

  public async getById(id: number): Promise<User> {
    const [[response]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT id, name, email from Users WHERE id = ?',
      [id]
    );
    return response as User;
  }

  public async create(user: User): Promise<number> {
    const [{ insertId }] = await this.connection.execute<OkPacket>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [user.name, user.email, user.password]
    );
    return insertId;
  }

  public async update(user: Partial<User>, id: string) {
    const validFields = ['name', 'email', 'password'];
    const toBeUpdated = Object.fromEntries(
      Object.entries(user).filter(([key]) => validFields.includes(key))
    );

    const placeholders = Object.keys(toBeUpdated)
      .map((key) => `${key}=?`)
      .join(',');

    await this.connection.execute(
      `UPDATE Users SET ${placeholders} WHERE id = ?`,
      [...Object.values(toBeUpdated), id]
    );
  }
}

export default UserModel;
